import Artist from 'core/domain/entities/artist.entity';
import ArtistRepository from '../../application/ports/artist.repository';
import SpotifyArtist from '../models/artist.spotify.model';

const SPOTIFY_ROOT_API_URL = 'https://api.spotify.com/';
const ARTISTS_URL = 'v1/artists/0TnOYISbd1XYRBk9myaseg';

const headers = {
	Authorization:
		'Bearer BQAAAb-0xz7UHq88xc0wPO9O9ftvD4qtoOV5LGeV1i6AOa2mQUBUnevt_slEUtVJYJonSFuhuRbts2AHlSuT4Q96OKNEtnAriTzCZV45xjqCkb8ABpk',
};

class ArtistRepositoryImpl implements ArtistRepository {
	public async getArtistById(id: string): Promise<Artist> {
		const data = await fetch(SPOTIFY_ROOT_API_URL + ARTISTS_URL, {
			method: 'GET',
			headers: headers,
		});
		const spotifyArtist: SpotifyArtist = await data.json();

		const artist: Artist = {
			genres: spotifyArtist.genres,
			id: spotifyArtist.id,
		};

		return artist;
	}
}

export default ArtistRepositoryImpl;
