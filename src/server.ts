import cors from 'cors';
import express from 'express';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/hello', (req, res) => {
	res.send('hello !');  
});

app.listen(port, () => console.log(`Server turned on and listening on ${port}`));
