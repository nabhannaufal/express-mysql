import { DataTypes } from 'sequelize';

const movieModel = (sequelize) =>
  sequelize.define('movies', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default movieModel;
