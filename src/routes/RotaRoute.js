import Rota from "../controllers/RotaController";

export default (app) => {
  app.post('/rota/persist', Rota.persist);
  app.post('/rota/persist/:id', Rota.persist);
  app.post('/rota/destroy', Rota.destroy);
  app.get('/rota', Rota.get);
  app.get('/rota/:id', Rota.get);
};
