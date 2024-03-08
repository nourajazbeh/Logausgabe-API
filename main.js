const express = require('express');
const winston = require('winston');

const app = express();

// Konfiguration des Loggers
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

app.get('/info', (req, res) => {
  logger.info('This is an info message');
  res.send('Info message logged');
});

app.get('/debug', (req, res) => {
  logger.debug('This is a debug message');
  res.send('Debug message logged');
});

app.get('/error', (req, res) => {
  logger.error('This is an error message');
  res.send('Error message logged');
});

app.get('/fatal', (req, res) => {
  logger.log('fatal', 'This is a fatal message');
  res.send('Fatal message logged');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
