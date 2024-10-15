import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Parada = sequelize.define(
  "parada",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Parada;
