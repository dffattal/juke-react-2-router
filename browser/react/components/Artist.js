import React from 'react';
import {Link} from 'react-router';
import Songs from '../components/Songs';
import Albums from '../components/Albums';

class Artist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.selectArtistAlbums(this.props.routeParams.id)
    this.props.selectArtistSongs(this.props.routeParams.id)
    this.props.selectArtist(this.props.routeParams.id)
  }

  render() {
    const artistAlbums = this.props.selectedArtistAlbums
    const artistSongs = this.props.selectedArtistSongs
    const artist = this.props.selectedArtist
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    console.log('artist', artist)

    return (
      <div>
        <h3>{artist.name}</h3>
        <Albums
          albums={artistAlbums} />
        <h4>Songs:</h4>
        <Songs
          songs={artistSongs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    )
  }

}

export default Artist;
