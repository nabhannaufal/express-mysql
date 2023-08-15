import { galery } from '../database/db.js';

import AWS from 'aws-sdk';

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

  addGaleryDB: async (req, res) => {
    try {
      const newGalery = await galery.create(req.body);
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
  getDataFromS3: async (req, res) => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.params.key,
    };
    const data = await s3.getObject(params).promise();
    res.json({
      status: 'success',
      message: 'Success get data from s3',
      data,
    });
  },
};

export default galeryController;
