import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/mernRoutes';

const app = express();
const PORT = 3000;
const url = 'mongodb+srv://zance:comeandgetyourlove@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true';

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
