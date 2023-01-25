'use strict';
const { string } = require('joi');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    full_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Full Name cannot be ommited'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        notNull : {
          msg : 'Email cannot be ommited'
        },
        notEmpty : {
          msg : 'Email cannot be an empty string'
        },
        isEmail : {
          msg : 'Wrong email format'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Full Name cannot be ommited'
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      allowNull : false,
      defaultValue : 'user',
      validate : {
        notNull : true,
        isIn : [['admin', 'doctor', 'user']]
      }
    },
    specialist_id: DataTypes.INTEGER,
    profile_desc: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};