import express from 'express'
import cors from 'cors';

const PORT = 8000

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.status(200).send({link:"https://winbuzz.in/signup?tag=DIGITAL"})
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})