import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import List from './models/lists'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/data');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established succesfully!');
});


router.route('/lists').get((req,res) => {
    List.find((err, lists) => {
        if(err)
            console.log(err);
        else
            res.json(lists);
    });
});

router.route('/lists/:id').get((req,res) => {
    List.findById(req.params.id, (err, list) => {
        if(err)
            console.log(err);
        else
            res.json(list);
    });
});

router.route('/lists/add').post((req,res) => {
    let list = new List(req.body);
    list.save()
        .then(list => {
            res.status(200).json('list Added Succesfully');
    })
        .catch(err => {
            res.status(400).send('Failed to create new record');
    });
});

router.route('/lists/update/:id').post((req,res) => {
    List.findById(req.params.id, (err, list) => {
        if(!list)
            return next(new Error('could not load document'));
        else{
            list.title = req.body.title;
            list.rollno = req.body.rollno;

            list.save().then(list => {
                res.json('Update Succesfull');
            })
            .catch(err => {
                res.status(400).send('Failed to update record');
            });
        }
    });
});

router.route('/lists/delete/:id').get((req,res) => {
    List.findByIdAndRemove({_id:req.params.id}, (err, list) => {
        if(err)
            res.json(err);
        else
            res.json('removed succesfully');
    });
});


app.use('/', router);

app.listen(4000,() => console.log('Express server running on port 4000'));