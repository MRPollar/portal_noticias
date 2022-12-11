module.exports = {
   async allNotice(Schema){
      const arr = await Schema.find({}).sort({"_id": -1});
      return arr.map((val) => ({
         titulo: val.titulo,
         subtitulo:val.subtitulo,
         conteudo: val.conteudo,
         categoria: val.categoria,
         views: val.views,
         overview: val.conteudo.substr(0, 200)+'...',
         imagem: val.imagem,
         autor: val.autor,
         slug: val.slug
      }))
   },
   async limitView(Schema){
      const arr = await Schema.find({}).sort({views: -1}).limit(10);
      return arr.map(val => ({
         titulo: val.titulo,
         overview: val.conteudo.substr(0, 160)+'...',
         imagem: val.imagem,
         views: val.views,
         slug: val.slug,
      }))
   }
}