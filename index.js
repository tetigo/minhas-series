const path = require('path')
const express = require('express')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const pages = require('./routes/pages')
const series = require('./routes/series')

// const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'
const mongo = process.env.MONGODB || `mongodb://${host}/minhas-series`
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//prepara pra receber valores no POST
app.use(bodyParser.urlencoded({extended: true}))

//lugar dos assets usados no projeto
app.use(express.static(path.join(__dirname, 'public')))

//setando a view engine pra usar EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', pages)
app.use('/series', series)


mongoose
    .connect(mongo, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(port, host, ()=> {
            console.log("listening.....");
        })
    })
    .catch(e=>{
        console.log(e)
    })


