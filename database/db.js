import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';

import movieModel from '../models/movieModel.js';
import galeryModel from '../models/galeryModel.js';

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

export const movie = movieModel(db);
export const galery = galeryModel(db);

export default db;
