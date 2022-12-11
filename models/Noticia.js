const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = () => {
   const Noticia = new Schema({
      titulo: String,
      subtitulo: String,
      conteudo: String,
      imagem: String,
      autor: String,
      slug: String
   },{collection: "noticias"});
   
   return mongoose.model("noticias", Noticia);
}