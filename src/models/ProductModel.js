// {
//   freezeTableName: true,
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at',
// }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Category from './CategoryModel';

const Product = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(15, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(2000),
    },
    description: {
      type: DataTypes.STRING(300),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Product.belongsTo(Category, {
  as: 'categories',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_category',
    name: 'idCategory',
    allowNull: false,
  },
});

export default Product;
