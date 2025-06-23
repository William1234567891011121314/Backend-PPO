import User from "./User";

export default function newUser(app: any, mongoose: any) {
    app.post('/api/signup', (req: any, res: any) => {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password
        })
        newUser.save()
        res.status(201).json({msg: `Usuário cadastrado`})
    })
}