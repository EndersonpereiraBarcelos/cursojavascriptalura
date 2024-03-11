import mongoose from "mongoose";

const livrosSchemas = new mongoose.Schema({
    id:{ type:mongoose.Schema.Types.ObjectId },
    titulo:{ type:String, required: true },
    editora:{ type:String },
    preco:{ type:Number },
    paginas:{ type:String }
}, {versionKey:false})

const livro = mongoose.model("livros", livrosSchemas)

export default livro