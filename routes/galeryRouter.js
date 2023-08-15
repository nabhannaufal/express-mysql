import express from 'express';
import upload, { uploadLocal } from '../helper/multerHelper.js';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

galeryRouter.post('/aws', upload.single('photo'), galeryController.addGalery);
galeryRouter.post('/', uploadLocal.single('photo'), galeryController.addGaleryLocal);
galeryRouter.get('/db', galeryController.showGalery);
galeryRouter.get('/', galeryController.getDataFromS3);

export default galeryRouter;
