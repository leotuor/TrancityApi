import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Veiculo = sequelize.define(
  "veiculo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    placa: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
    },
    capacidade: {
      type: DataTypes.INTEGER,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Veiculo;
