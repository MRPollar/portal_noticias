module.exports = app => {
   const Noticia = app.models.Noticia;
   const controllerHome = {
      async index(req,res){
         try { 
            const arr = await Noticia.find({}).sort({"id": -1});
            console.log(arr);
            res.render('home/index');
         } catch (error) {
            console.log(error)
         }
      }
   }
   return controllerHome;
}