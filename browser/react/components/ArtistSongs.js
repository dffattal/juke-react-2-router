import React from 'react';
import {Link} from 'react-router';
import Songs from '../components/Songs';

const ArtistSongs = (props) => {

	const songs = props.songs;

	return (
        <Songs
          songs={songs}
          currentSong={props.currentSong}
          isPlaying={props.isPlaying}
          toggleOne={props.toggleOne} />
	)

}

export default ArtistSongs;