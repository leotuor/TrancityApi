/* eslint-disable quotes */
import AddressRoute from "./AddressRoute";
import CategoryRoute from "./CategoryRoute";
import CupomRoute from "./CupomRoute";
import OrderRoute from "./OrderRoute";
import OrdersProductRoute from "./OrdersProductRoute";
import PaymentRoute from "./PaymentRoute";
import ProductRoute from "./ProductRoute";
import UserRoute from "./UserRoute";

function Routes(app) {
  AddressRoute(app);
  CategoryRoute(app);
  CupomRoute(app);
  OrderRoute(app);
  OrdersProductRoute(app);
  PaymentRoute(app);
  ProductRoute(app);
  UserRoute(app);
}

export default Routes;
