const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')

const app = express()

app.use(express.json({extended: true}))
app.use('/api/auth', authRoutes)

const PORT = config.get('port') || 5000

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log('Server Error', e.message);
        procces.exit(1)
    }
}

start()
