

async function authValidator(req, res, next){
    const {email, password} = req.body

    const decodedPass = await bcrypt.compare()
}