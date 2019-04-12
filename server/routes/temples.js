var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./SequenceGenerator');

const Temple = require('../models/temple');

function returnError(res, error) {
    res.status(500).json({
        message: 'An error has occurrecd',
        error: error
    });
}

// revisit
router.get('/', (req, res, next) => {
    Temple.find()
        .then(temples => {
            res.status(200).json({
                message: 'Success',
                temples: temples
            });
        })
        .catch(error => {
            returnError(res, error);
        });
        
});

router.post('/', (req, res, next) => {
    const maxTempleId = sequenceGenerator.nextId("temples");

    const temple = new Temple({
        id: maxTempleId,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    });

    temple.save()
        .then(createdTemple => {
            res.status(201).json({
                Temple: 'Temple added successfully',
                TempleId: createdTemple.id
            });
        })
        .catch(error => {
            returnError(res, error);
        });
});

router.put('/:id', (req, res, next) => {
    Temple.findOne({ id: req.params.id })
        .then(temples => {
            temples.name = req.body.name;
            temples.description = req.body.description;
            temples.url = req.body.url;

            Temple.updateOne({ id: req.params.id}, temples)
                .then(result => {
                    res.status(204).json({
                        message: 'Temple updated successfully'})
                    })
                    .catch(error => {
                        returnError(res, error);
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        temples: 'Temple not found.',
                        error: { temples: 'Temple not found'}
                    });
                });
});

router.delete("/:id", (req, res, next) => {
    Temple.findOne({ id: req.params.id })
        .then(temples => {
            Temple.deleteOne({ id: req.params.id })
                .then(result => {
                    res.status(204).json({message: "Temple deleted successfully" });
                })
                .catch(error => {
                    returnError(res, error);
                });
        })
        .catch(error => {
            returnError(res, error);
        });
});

module.exports = router;