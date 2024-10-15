import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Motorista from './MotoristaModel';
import RotaParada from './RotaParadaModel';

const Viagem = sequelize.define(
  'viagem',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dataPartida: {
      field: 'data_partida',
      type: DataTypes.DATE,
      allowNull: false,
    },
    dataChegada: {
      field: 'data_chegada',
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);
Viagem.belongsTo(Motorista, {
  as: 'motorista',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_motorista',
    name: 'idMotorista',
    allowNull: false,
  },
});

Viagem.belongsTo(RotaParada, {
  as: 'rotaParada',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_rota_parada',
    name: 'idRotaParada',
    allowNull: false,
  },
});

export default Viagem;
