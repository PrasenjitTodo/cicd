console.log('\n\n-: App Started :-');

const express       = require('express');
const app   = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome 02:-');
    res.send('-: Welcome 02:-');
});

console.log('-: App Running 02:-');
app.listen(4000);
