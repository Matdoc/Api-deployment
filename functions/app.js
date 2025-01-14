import express, { Router } from 'express';
// import serverless from 'serverless-http';
const app = express();
const router = Router();

// let records = [];

//Get all students
router.get('/', (_, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (_, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (_, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (_, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (_, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
export default app;