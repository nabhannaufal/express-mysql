import { galery } from '../database/db.js';

const galeryController = {
  addGalery: async (req, res) => {
    try {
      const data = {
        photo_title: req.file.key,
        photo_url: req.file.location,
      };
      const newGalery = await galery.create(data);
      if (newGalery) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success add galery',
          data: newGalery,
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
  showGalery: async (req, res) => {
    try {
      const allGalery = await galery.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get all galery',
        data: allGalery,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  findPhotos: async (req, res) => {
    try {
      const findGalery = await galery.findByPk(req.params.id);
      if (findGalery) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success get galery by id',
          data: findGalery,
        });
      } else {
        res.json({
          status: 'Error',
          statusCode: 400,
          message: 'Galery not found',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error',
        statusCode: 500,
      });
    }
  },
};

export default galeryController;
