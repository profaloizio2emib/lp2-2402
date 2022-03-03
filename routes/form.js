module.exports = (app)=>{

    app.get('/cadastro',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.get('/',(req,res)=>{
        res.render('formulario.ejs')
    })

    //criar uma rota para gravar as informações digitadas no formulário
    app.post('/create',(req,res)=>{
        //importar as configurações do banco de dados
        var bancodedados = require('../config/bancodedados')
        //criar uma variavel para a conexao
        var conexao = bancodedados.conexao
        //executar a conexao
        conexao()
        //criar uma variavel para coleção alunos
        var alunos = bancodedados.alunos
        //receber as informações do formulario
        var formulario = req.body
        //criar um documento com as infos do form
        var documento = new alunos({
            nome:formulario.nome,
            rm:formulario.rm,
            turma:formulario.turma,
            idade:formulario.idade
        }).save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            console.log("não foi possível gravar as informações")
        })
    })
}