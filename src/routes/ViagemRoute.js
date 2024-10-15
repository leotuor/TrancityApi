import Viagem from "../controllers/viagemController";

export default (app) => {
  app.post('/viagem/persist', Viagem.persist);
  app.post('/viagem/persist/:id', Viagem.persist);
  app.post('/viagem/destroy', Viagem.destroy);
  app.get('/viagem', Viagem.get);
  app.get('/viagem/:id', Viagem.get);
};
