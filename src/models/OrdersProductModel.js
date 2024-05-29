// {
//   freezeTableName: true,
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at',
// }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Order from './OrderModel';
import Product from './ProductModel';

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProducts: {
      field: 'price_products',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

OrdersProducts.belongsTo(Order, {
  as: 'orders',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_order',
    name: 'idOrder',
    allowNull: false,
  },
});

OrdersProducts.belongsTo(Product, {
  as: 'products',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_product',
    name: 'idProduct',
    allowNull: false,
  },
});

export default OrdersProducts;
