require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 5000

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

}

app.listen(PORT, () => 
    console.log(`${chalk.green('✓')} ${chalk.blue(`Server on port ${PORT}`)}`)
);
