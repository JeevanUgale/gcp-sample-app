const express = require('express');
const app = express();

const buildNumber = process.env.BUILD_NUMBER || 'V1';

app.get('/', (req, res) => { 
  res.send('Hello World from GKE!V'${buildNumber}); 
});
app.listen(8080, () => { 
  console.log('App running on port 8080');
});
