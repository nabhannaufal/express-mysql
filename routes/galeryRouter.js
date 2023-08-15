import express from 'express';
import upload, { uploadLocal } from '../helper/multerHelper.js';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

galeryRouter.post('/', galeryController.addGaleryDB);
galeryRouter.post('/s3', upload.single('photo'), galeryController.addGalery);
galeryRouter.post('/local', uploadLocal.single('photo'), galeryController.addGalery);
galeryRouter.get('/', galeryController.showGalery);
galeryRouter.get('/find/:id', galeryController.findPhotos);
galeryRouter.get('/s3/:key', galeryController.getDataFromS3);

export default galeryRouter;
