import Cupom from "../controllers/CupomController";

export default (app) => {
  app.post('/cupom/persist', Cupom.persist);
  app.post('/cupom/persist/:id', Cupom.persist);
  app.post('/cupom/destroy', Cupom.destroy);
  app.get('/cupom', Cupom.get);
  app.get('/cupom/:id', Cupom.get);
};
