const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = () => {
   const noticia = new Schema({
      titulo: String,
      subtitulo: String,
      conteudo: String,
      categoria: String,
      views: Number,
      imagem: String,
      autor: String,
      slug: String
   },{collection: "noticias"});
   
   return mongoose.model("noticias", noticia);
}