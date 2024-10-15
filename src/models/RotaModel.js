import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Rota = sequelize.define(
  "rota",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    origem: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Rota;
