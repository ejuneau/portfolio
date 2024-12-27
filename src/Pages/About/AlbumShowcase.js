import theNewSound from '../../Assets/greep.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faBandcamp } from '@fortawesome/free-brands-svg-icons'

const TESTALBUM = {
  title: "The New Sound",
  artist: "Geordie Greep",
  album: theNewSound,
  bandcampLink: "https://geordiegreep.bandcamp.com/album/the-new-sound",
  spotifyLink: "https://open.spotify.com/album/07YS7ooqYtvPZLlW59MHY5",
  appleLink: "https://music.apple.com/us/album/the-new-sound/1752102463"
}


function AlbumShowcase() {
  return (
    <div className="AlbumShowcaseContainer">
      <h1 className="Title-Artist" style={{marginBottom: 0, fontSize: "1.5em"}}><i>{`${TESTALBUM.title}`}</i></h1>
      <h1 className="Title-Artist" style={{margin: 0, fontSize: "1.2em"}}>by</h1>
      <h1 className="Title-Artist" style={{marginTop: 0, fontSize: "1.5em"}}>{`${TESTALBUM.artist}`}</h1>

      <img src={TESTALBUM.album} alt={`"${TESTALBUM.title}" by ${TESTALBUM.artist} album cover`} />
       <p className="available-here" >Available to listen here:</p>
       <div className="links-button-container" style={{display: "flex"}}>
          <div className="music-button">
            <a href={TESTALBUM.bandcampLink} target="_blank">
              <FontAwesomeIcon icon={faBandcamp}  />
              <p>Bandcamp</p>
            </a>
          </div>
          <div className="music-button">
            <a href={TESTALBUM.spotifyLink} target="_blank">
              <FontAwesomeIcon icon={faSpotify}  />
              <p>Spotify</p>
            </a>
          </div>
          <div className="music-button">
            <a href={TESTALBUM.appleLink} target="_blank">
              <FontAwesomeIcon icon={faApple}  />
              <p>Apple Music</p>
            </a>
          </div>
       </div>
    </div>
  );
}

export default AlbumShowcase;
