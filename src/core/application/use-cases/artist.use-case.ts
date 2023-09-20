import Artist from '../../domain/entities/artist.entity';
import ArtistRepository from '../ports/artist.repository';

class ArtistUseCase {
	constructor(private readonly artistRepository: ArtistRepository) {}

	async getArtistById(id: string): Promise<Artist> {
		return this.artistRepository.getArtistById('1');
	}
}

export default ArtistUseCase;
