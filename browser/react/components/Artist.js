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
    const selectAlbum = this.props.selectAlbum;
    const artistAlbums = this.props.selectedArtistAlbums
    const artistSongs = this.props.selectedArtistSongs
    const artist = this.props.selectedArtist
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    const children = this.props.children;
    const propsToPassToChildren = {
      /**todo: make sure to include all the props that the child components need! **/
      
      selectAlbum: selectAlbum,
      albums: artistAlbums,
      songs: artistSongs,
      currentSong: currentSong,
      isPlaying: isPlaying,
      toggleOne: toggleOne

    };

    console.log('artist', artist)

    return (

      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>

      )

  }

}

export default Artist;


    {/* return (
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
      </div> ) */}