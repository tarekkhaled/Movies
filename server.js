const express = require('express');
const helmet = require('helmet');
const app = express();

/** for getting data in req.body */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/** some secure */
app.use(helmet());

app.use('/',(req,res,next)=>{
    res.json({name : 'adel shakel'})
})
export const start = () => {
    app.listen(3000,()=>{
        console.log('Server is now listening to port 3000 :)')
    })
}