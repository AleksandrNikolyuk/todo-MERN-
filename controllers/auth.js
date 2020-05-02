const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Ajv = require('ajv')
const config = require('config')
const loginJsonSchema = require('../schemes/login')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')


const registerAction = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const personObj = {
            email: email,
            password: password
        }

        let ajv = new Ajv({verbose: true});

        const validLogin = ajv.validate(loginJsonSchema, personObj);

        if (!validLogin) {
            const message = `${ajv.errors[0].parentSchema.description} ${ajv.errors[0].message}`;
            throw new Error(message);
        }

        const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({message: 'User exist'})
            }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ email, password: hashPassword })

        await user.save()

        res.status(201).json({message: 'User created'})

    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
}


const loginAction = async (req, res, next) => {
    try {

        [
            check('email', 'Enter correct email').normalizeEmail().isEmail(),
            check('password', 'Enter password').exists()
        ]

        const errors= validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data during entering'
                })
            }

        const { email, password } = req.body
        const user = await User.findOne({ email })
            if (!user) {
                res.status(400).json({message: 'Try again'})
            }

        const isMach = await bcrypt.compare(password, user.password)
            if(!isMach) {
                return res.status(400).json({message: 'Wrong password'})
            }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1m' }
        )

        res.json({ token, userId: user.id })
    
    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
}


module.exports.registerAction = registerAction
module.exports.loginAction = loginAction