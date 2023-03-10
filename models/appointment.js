"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: 'Doctor',
        foreignKey: "doctor_id",
      });
      this.belongsTo(models.User, {
        as: 'User',
        foreignKey: "doctor_id",
      });
      
      this.belongsTo(models.Specialist, {
        foreignKey: "specialist_id",
        as : 'Specialist'
      });
      this.belongsTo(models.Schedules, {
        foreignKey: "schedule_id",
        as : 'Schedule'
      });
    }
  }
  Appointment.init(
    {
      specialist_id: DataTypes.INTEGER,
      doctor_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      schedule_id: DataTypes.INTEGER,
      appointment_status :  DataTypes.STRING,
      appointment_desc: DataTypes.STRING,
      appointment_time: DataTypes.STRING,
      total_price: DataTypes.DOUBLE,
      payment_status: DataTypes.STRING,
      url_midtrans: DataTypes.STRING,
      token_midtrans: DataTypes.STRING,
      order_id_midtrans : DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointment;
};
