import Motorista from "../controllers/motoristaController";

export default (app) => {
  app.post('/motorista/persist', Motorista.persist);
  app.post('/motorista/persist/:id', Motorista.persist);
  app.post('/motorista/destroy', Motorista.destroy);
  app.get('/motorista', Motorista.get);
  app.get('/motorista/:id', Motorista.get);
};
