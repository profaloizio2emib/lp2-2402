const mongoose = require('mongoose')

const conexao = async()=>{
    //var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
    var bdatlas = await mongoose.connect('mongodb+srv://userAdmin:admin1234@fiaptecnico.ivqhp.mongodb.net/fiap')
}

const modelo = mongoose.Schema({
    rm:String,
    nome:String,
    turma:String,
    idade:String
})

const alunos = mongoose.model('alunos',modelo)

module.exports = {conexao,alunos}