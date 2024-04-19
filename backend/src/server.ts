import express from 'express';
import router from './router';
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', router);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)  )

export default app