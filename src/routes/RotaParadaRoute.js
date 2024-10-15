import RotaParada from "../controllers/rotaParadaController";

export default (app) => {
  app.post('/rota-parada/persist', RotaParada.persist);
  app.post('/rota-parada/persist/:id', RotaParada.persist);
  app.post('/rota-parada/destroy', RotaParada.destroy);
  app.get('/rota-parada', RotaParada.get);
  app.get('/rota-parada/:id', RotaParada.get);
};
