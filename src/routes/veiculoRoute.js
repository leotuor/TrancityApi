import Veiculo from "../controllers/veiculoController";

export default (app) => {
  app.post('/veiculo/persist/:id', Veiculo.persist);
  app.post('/veiculo/persist', Veiculo.persist);
  app.post('/veiculo/destroy/:id', Veiculo.destroy);
  app.get('/veiculo', Veiculo.get);
  app.get('/veiculo/:id', Veiculo.get);
};
