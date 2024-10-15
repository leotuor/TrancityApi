import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './UsuarioModel';
import Veiculo from './VeiculoModel';

const Motorista = sequelize.define(
  'motorista',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    habilitacao: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);
Motorista.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

Motorista.belongsTo(Veiculo, {
  as: 'veiculo',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_veiculo',
    name: 'idVeiculo',
    allowNull: false,
  },
});

export default Motorista;
