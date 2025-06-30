import User from "./User";

export default function newUser(app: any, mongoose: any) {
    app.post('/api/signup', async (req: any, res: any) => {
        console.log(await User.findOne({name: req.body.name}))
        if (await User.findOne({name: req.body.name}) != null) {
            res.json({msg: "Usuário já existe"})
            return
        }
        console.log(req.body.password)
        if (req.body.password == '' || req.body.name == '') {
            res.json({msg: "Algum campo está vazio"})
            return
        }
        const newUser = new User({
            name: req.body.name,
            password: req.body.password
        })
        newUser.save()
        res.json({msg: `Usuário cadastrado`})
        res.cookie(name)
    })
}