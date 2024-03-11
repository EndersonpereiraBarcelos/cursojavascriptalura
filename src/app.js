import express from "express";

import connectaBanco from "./config/dbconnect.js";

import livro from './models/Livro.js'

const conexao = await connectaBanco()

conexao.on("error", (erro)=>{
    console.error("error de conexao", erro)
})

conexao.once('open', () => {
    console.log("Conexão com sucesso")
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Curso De Node.js")
})

app.get('/livros', async (req, res) =>{
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros)
})


app.post('/livros',(req, res)=>{
    livros.push(req.body)
    res.status(201).send('Registro criado')
})


app.get('/livros/:id', (req,res)=>{
    const index = buscalivro(req.params.id)
    res.status(200).json(livros[index])
})


app.put('/livros/:id', (req,res) =>{

    const index = buscalivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)

})

app.delete('/livros/:id', (req,res) => {
    const index = buscalivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send('livro excluido')
})


export default app