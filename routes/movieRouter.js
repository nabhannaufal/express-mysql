import express from 'express';
import movieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get('/', movieController.getMovies);
movieRouter.get('/:id', movieController.getMoviesById);
movieRouter.post('/', movieController.addMovie);
movieRouter.put('/:id', movieController.updateMovie);
movieRouter.delete('/:id', movieController.deleteMovie);

export default movieRouter;
