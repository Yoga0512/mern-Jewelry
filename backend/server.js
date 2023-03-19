import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products',function(req,res){
        res.send(data.products);
});
const port = process.env.PORT || 8080;
app.listen(port,()=> {
        console.log(`Server is running at https://localhost:${port}`)
});