import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.selectAlbum(this.props.routeParams.id)
  }

  render() {
    console.log(this)

    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }   <a href=''><span className='glyphicon glyphicon-share'></span></a></h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    )
  }
}

export default Album;
