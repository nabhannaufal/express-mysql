import { DataTypes } from 'sequelize';

const galeryModel = (sequelize) =>
  sequelize.define('galeries', {
    photo_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default galeryModel;
