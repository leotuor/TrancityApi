import Address from "../controllers/AddressController";

export default (app) => {
  app.post('/endereco/persist', Address.persist);
  app.post('/endereco/persist/:id', Address.persist);
  app.post('/endereco/destroy', Address.destroy);
  app.get('/endereco', Address.get);
  app.get('/endereco/:id', Address.get);
};
