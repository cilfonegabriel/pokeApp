import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

app.use('/', router);

app.get('/api', (req, res) => {
    res.json({msg: 'Desde Api'})
})

export default app