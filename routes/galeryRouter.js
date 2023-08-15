import express from 'express';
import upload from '../helper/multerHelper.js';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

galeryRouter.post('/', upload.single('photo'), galeryController.addGalery);
galeryRouter.get('/', galeryController.showGalery);
galeryRouter.get('/:id', galeryController.findPhotos);

export default galeryRouter;
