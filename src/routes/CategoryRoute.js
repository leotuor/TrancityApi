import Category from "../controllers/CategoryController";

export default (app) => {
  app.post('/categoria/persist', Category.persist);
  app.post('/categoria/persist/:id', Category.persist);
  app.post('/categoria/destroy', Category.destroy);
  app.get('/categoria', Category.get);
  app.get('/categoria/:id', Category.get);
};
