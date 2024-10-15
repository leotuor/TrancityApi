/* eslint-disable quotes */
import MotoristaRoute from "./MotoristaRoute";
import ParadaRoute from "./ParadaRoute";
import RotaParadaRoute from "./RotaParadaRoute";
import RotaRoute from "./RotaRoute";
import UsuarioRoute from "./usuarioController";
import VeiculoRoute from "./VeiculoRoute";
import ViagemRoute from "./ViagemRoute";

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
