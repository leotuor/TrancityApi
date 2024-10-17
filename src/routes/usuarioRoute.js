import Usuario from "../controllers/usuarioController";

export default (app) => {
  app.post('/usuario/persist', Usuario.persist);
  app.post('/usuario/persist/:id', Usuario.persist);
  app.post('/usuario/destroy/:id', Usuario.destroy);
  app.get('/usuario', Usuario.get);
  app.get('/usuario/:id', Usuario.get);
};
