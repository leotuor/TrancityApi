import User from "../controllers/UserController";
import verifyToken from "../middleware/verifyToken";
import verifyPermission from "../middleware/verifyPermission";

export default (app) => {
  app.post('/usuario/persist', User.persist);
  app.post('/usuario/persist/:id', User.persist);
  app.post('/usuario/destroy', User.destroy);
  app.get('/usuario', verifyToken, verifyPermission, User.get);
  app.get('/usuario/:id', User.get);
  app.post('/usuario/login', User.login);
  app.post('/usuario/register', User.register);
  app.post('/usuario/update', User.update);
};
