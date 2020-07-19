var express = require('express');
var router = express.Router();
var inquiry = require('../models/inquiry');

router.get('/:id', function (req, res, next) {
    inquiry.getInquirybyid(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/', function (req, res, next) {
    inquiry.getAllInquiry(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    inquiry.addInquiry(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.delete('/:id', function (req, res, next) {
    inquiry.deleteInquiry(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;