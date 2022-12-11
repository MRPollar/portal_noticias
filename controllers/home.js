const Querys = require('../middlewares/querys');
module.exports = app => {
   const Noticia = app.models.Noticias;
   const controllerHome = {
      async index(req,res){
         try {
            const news = await Querys.allNotice(Noticia);
            const plusview = await Querys.limitView(Noticia);
            res.render('index',{news, plusview});
         } catch (error) {
            console.log(error)
         }
      }
   }
   return controllerHome;
}