module.exports = (app)=>{
    app.get('/cadastro',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.get('/',(req,res)=>{
        res.render('formulario.ejs')
    })

}