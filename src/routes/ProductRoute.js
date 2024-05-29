import Product from "../controllers/ProductController";

export default (app) => {
  app.post('/produto/persist', Product.persist);
  app.post('/produto/persist/:id', Product.persist);
  app.post('/produto/destroy', Product.destroy);
  app.get('/produto', Product.get);
  app.get('/produto/:id', Product.get);
};
