import ArtistUseCase from '../../../core/application/use-cases/artist.use-case';
import { Request, Response } from 'express';

class ArtistController {
	constructor(private readonly artistUseCase: ArtistUseCase) {}

	async getArtistById(req: Request, res: Response): Promise<void> {
		const artist = await this.artistUseCase.getArtistById('');

		res.status(200).json(artist);
	}
}

export default ArtistController;
