console.log('\n\n-: App Started 04:-');

const express       = require('express');
const app   = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome 05:-');
    res.send('-: Welcome 05:-');
});

console.log('-: App Running 05:-');
app.listen(4000);
