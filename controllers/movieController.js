import { movie } from '../database/db.js';

const movieController = {
  addMovie: async (req, res) => {
    try {
      if (req.body.title && req.body.year && req.body.genre) {
        const newMovie = await movie.create(req.body);
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success add movie',
          data: newMovie,
        });
      } else {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Title, year and genre are required',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  getMovies: async (req, res) => {
    try {
      const movies = await movie.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get all movies',
        data: movies,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  getMoviesById: async (req, res) => {
    try {
      const findMovie = await movie.findByPk(req.params.id);
      if (findMovie) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success get movie by id',
          data: findMovie,
        });
      } else {
        res.json({
          status: 'Error',
          statusCode: 400,
          message: 'Movie not found',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error test',
        statusCode: 500,
        message: err,
      });
    }
  },
  updateMovie: async (req, res) => {
    try {
      const updateMovie = await movie.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateMovie[0] === 0) {
        res.json({
          status: 'error',
          statusCode: 400,
          message: 'Movie not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success update movie',
          data: req.body,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  deleteMovie: async (req, res) => {
    try {
      const deleteMovie = await movie.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteMovie === 0) {
        res.json({
          status: 'error',
          statusCode: 400,
          message: 'Movie not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success delete movie',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
};

export default movieController;
