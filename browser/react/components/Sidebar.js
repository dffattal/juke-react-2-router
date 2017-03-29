import React from 'react';
import {Link, activeClassName} from 'react-router'

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;
  const deselectArtist = props.deselectArtist;

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section >
        <Link to='/albums' onClick={deselectAlbum} activeClassName='menu-item active' className = 'menu-item link'>
        ALBUMS
        </Link>
      </section>
      <section>
        <Link to='/artists' onClick={deselectArtist} activeClassName='menu-item active'
        className = 'menu-item link'>
        ARTISTS
        </Link>
      </section>
    </sidebar>
  );
}

export default Sidebar;
