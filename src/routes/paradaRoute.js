import Parada from "../controllers/paradaController";

export default (app) => {
  app.post('/parada/persist', Parada.persist);
  app.post('/parada/persist/:id', Parada.persist);
  app.post('/parada/destroy/:id', Parada.destroy);
  app.get('/parada', Parada.get);
  app.get('/parada/:id', Parada.get);
};
