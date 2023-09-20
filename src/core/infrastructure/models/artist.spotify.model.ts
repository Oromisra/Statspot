import SpotifyFollowers from './followers.spotify.model';

interface SpotifyArtist {
	followers: SpotifyFollowers;
	genres: string[];
	id: string;
	name: string;
	popularity: number;
	type: string;
	uri: string;
}

export default SpotifyArtist;
