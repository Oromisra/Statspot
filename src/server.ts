import cors from 'cors';
import express from 'express';
import ArtistController from './adapters/entry-points/controllers/artist.controller.js';
import ArtistUseCase from './core/application/use-cases/artist.use-case.js';
import ArtistRepositoryImpl from './core/infrastructure/restapi/artist.repository.impl.js';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const artistRepository = new ArtistRepositoryImpl();
const artistUseCase = new ArtistUseCase(artistRepository);
const artistController = new ArtistController(artistUseCase);

app.get('/artists', (req, res) => {
	artistController.getArtistById(req, res);
});

app.listen(port, () => console.log(`Server turned on and listening on ${port}`));
