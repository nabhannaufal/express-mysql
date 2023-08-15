import express from 'express';
import upload, { uploadLocal } from '../helper/multerHelper.js';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

galeryRouter.post('/', uploadLocal.single('photo'), galeryController.addGaleryLocal);
galeryRouter.post('/aws', upload.single('photo'), galeryController.addGalery);
galeryRouter.get('/', galeryController.showGalery);
galeryRouter.get('/aws', galeryController.getDataFromS3);

export default galeryRouter;
