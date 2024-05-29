import OrdersProducts from "../controllers/OrdersProductController";

export default (app) => {
  app.post('/pedido-produto/persist', OrdersProducts.persist);
  app.post('/pedido-produto/persist/:id', OrdersProducts.persist);
  app.post('/pedido-produto/destroy', OrdersProducts.destroy);
  app.get('/pedido-produto', OrdersProducts.get);
  app.get('/pedido-produto/:id', OrdersProducts.get);
};
