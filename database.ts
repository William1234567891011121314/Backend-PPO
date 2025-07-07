import User from "./User";

export function newUser(app: any) {
    app.post('/api/signup', async (req: any, res: any) => {
        if (await User.findOne({name: req.body.name}) != null) {
            res.json({msg: "Usuário já existe"})
            return
        }
        if (req.body.password == '' || req.body.name == '') {
            res.json({msg: "Algum campo está vazio"})
            return
        }
        const newUser = new User({
            name: req.body.name,
            password: req.body.password
        })
        req.session.isLogged = true
        req.session.username = req.body.name
        newUser.save()
        res.json({msg: `Usuário cadastrado`})
    })
}

export function LogUser(app: any) {
    app.post('/api/login', async (req: any, res: any) => {
        const user = await User.findOne({name: req.body.name})
        if (user == null) {
            res.json({msg: 'Usuário não existe'})
            return
        }

        if (user.password == req.body.password) {
            req.session.isLogged = true
            req.session.username = user.name
            res.json({msg: 'Login feito com sucesso'})
            return
        }
        res.json({msg: "Senha incorreta"})
    })
}

export async function getSession(app: any) {
    app.get('/api/getSession', (req: any, res: any) => {
        return req.session
    })
}