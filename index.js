const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParse = require('body-parser')

const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//prepara pra receber valores no POST
app.use(bodyParse.urlencoded({extended: true}))

//lugar dos assets usados no projeto
app.use(express.static(path.join(__dirname, 'public')))

//setando a view engine pra usar EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.send('ok123')
})

mongoose
    .connect(mongo, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(port, ()=> {
            console.log('listening...')
        })
    })
    .catch(e=>{
        console.log(e)
    })


