console.log('\n\n-: App Started 04:-');

const express       = require('express');
const app   = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome 04:-');
    res.send('-: Welcome 04:-');
});

console.log('-: App Running 04:-');
app.listen(4000);
