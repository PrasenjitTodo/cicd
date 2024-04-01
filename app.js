console.log('\n\n-: App Started :-');

const express       = require('express');
const app   = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
});

console.log('-: App Running :-');
app.listen(4000);