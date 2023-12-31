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
      console.log(err);
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },

  addGaleryLocal: async (req, res) => {
    try {
      const data = {
        photo_title: req.file.filename,
        photo_url: req.protocol + '://' + req.get('host') + '/' + req.file.filename,
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
      console.log(err);
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
    try {
      const s3 = new AWS.S3();
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
      };
      const data = await s3.listObjects(params).promise();
      if (data?.Contents.length > 0) {
        const objectList = data.Contents.map((obj) => ({
          key: obj.Key,
          size: obj.Size,
        }));
        res.json({
          status: 'success',
          message: 'Success get data from s3',
          data: objectList,
        });
      } else {
        res.json({
          status: 'success',
          message: 'no data found',
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

export default galeryController;
