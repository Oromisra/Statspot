import Artist from 'core/domain/entities/artist.entity';

interface ArtistRepository {
	getArtistById(id: string): Promise<Artist>;
}

export default ArtistRepository;
