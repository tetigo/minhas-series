const Serie = require('../models/serie')

const index = async(req, res)=> {
    const docs = await Serie.find({})
    res.render('series/index', {series: docs})
    // Serie.find({}, (err, docs)=> {
    //     res.render('series/index', {series: docs})
    // })
    
}
const nova = async(req, res)=> {
    const serie = new Serie({
        name: 'Caverna do Dragão',
        status: 'to create an ending story'
    })
    serie.save(()=>console.log('saved'))
    res.render('series/nova')
}

module.exports = {
    index,
    nova,
}

