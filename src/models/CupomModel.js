import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Cupom = sequelize.define(
  'cupoms',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uses: {
      type: DataTypes.INTEGER,
      defaultValue: 999,
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);

export default Cupom;
