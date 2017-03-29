import React from 'react';
import {Link} from 'react-router';
import Albums from '../components/Albums';

const ArtistAlbums = (props) => {

	const albums = props.albums;
	const selectAlbum = props.selectAlbum;

	return (
		<Albums albums={albums} selectAlbum={selectAlbum} />
	)

}

export default ArtistAlbums;