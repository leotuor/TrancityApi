import Order from "../controllers/OrderController";

export default (app) => {
  app.post('/pedido/persist', Order.persist);
  app.post('/pedido/persist/:id', Order.persist);
  app.post('/pedido/destroy', Order.destroy);
  app.get('/pedido', Order.get);
  app.get('/pedido/:id', Order.get);
};
