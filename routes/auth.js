const { Router } = require('express')
const router = Router()
const { registerAction, loginAction } = require('../controllers/auth')

// /api/auth/register
router.post('/register', registerAction)

// /api/auth/login
router.post('/login', loginAction)


module.exports = router