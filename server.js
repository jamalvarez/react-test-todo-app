const express = require('express');
const app = express();

app.use(express.static('./server'));
app.use('/dist/', express.static('./dist'));
app.use('/styles/', express.static('./styles'));

app.listen(3000, ()=>{
  console.log('App listening in port 3000');
})