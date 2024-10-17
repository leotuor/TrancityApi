/* eslint-disable quotes */
import MotoristaRoute from "./motoristaRoute";
import ParadaRoute from "./paradaRoute";
import RotaParadaRoute from "./rotaParadaRoute";
import RotaRoute from "./rotaRoute";
import UsuarioRoute from "./usuarioRoute";
import VeiculoRoute from "./veiculoRoute";
import ViagemRoute from "./viagemRoute";

function Routes(app) {
  MotoristaRoute(app);
  ParadaRoute(app);
  RotaParadaRoute(app);
  RotaRoute(app);
  UsuarioRoute(app);
  VeiculoRoute(app);
  ViagemRoute(app);
}

export default Routes;
