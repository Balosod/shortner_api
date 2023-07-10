import * as dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, urlencoded } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import LinkRouter from './routes/linkRouter';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
    res.send('URL Shortner');
});

app.use('/api', LinkRouter);
app.listen(port, () => {
    console.log('Server is listening on port 3001');
});
