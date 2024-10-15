import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Rota from './RotaModel';
import Parada from './ParadaModel';

const RotaParada = sequelize.define(
  'rota_parada',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);
RotaParada.belongsTo(Parada, {
  as: 'parada',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_parada',
    name: 'idParada',
    allowNull: false,
  },
});

RotaParada.belongsTo(Rota, {
  as: 'rota',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_rota',
    name: 'idRota',
    allowNull: false,
  },
});

export default RotaParada;
