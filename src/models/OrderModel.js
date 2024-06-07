// {
//   freezeTableName: true,
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at',
// }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import User from './UserModel';
import Address from './AddressModel';
import Payment from './PaymentModel';
import Cupom from './CupomModel';

const Order = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.NUMBER,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Order.belongsTo(User, {
  as: 'userCostumer',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_costumer',
    name: 'idUserCustumer',
    allowNull: false,
  },
});

Order.belongsTo(User, {
  as: 'userDelivery',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_deliver',
    name: 'idUserDelivery',
    allowNull: false,
  },
});

Order.belongsTo(Address, {
  as: 'adresses',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_adress',
    name: 'idAddress',
    allowNull: false,
  },
});
Order.belongsTo(Payment, {
  as: 'payments',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_payment',
    name: 'idPayment',
    allowNull: false,
  },
});
Order.belongsTo(Cupom, {
  as: 'cupoms',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cupom',
    name: 'idCupom',
    allowNull: false,
  },
});

export default Order;
