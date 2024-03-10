const express = require('express');
const winston = require('winston');

const app = express();


const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

app.get('/info', (req, res) => {
  if (LOG_LEVEL === 'INFO' || LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    logMessage('INFO', 'This is an info message');
  }
  res.send('Info route');
});

app.get('/debug', (req, res) => {
  if (LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
      logMessage('DEBUG', 'This is a debug message');
    }
    res.send('Debug route');
  });


app.get('/error', (req, res) => {
  if (LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
      logMessage('ERROR', 'This is an error message');
    }
    res.send('Error route');
  });

app.get('/fatal', (req, res) => {
  if (LOG_LEVEL === 'fatal') {
    logMessage('FATAL', 'This is a fatal message');
  }
  res.send('Fatal route');
});   
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost: ${PORT}`);
});
