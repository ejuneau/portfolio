import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Modal from 'react-modal';


const offBlack = "#0F0F0F";
const jammmingColor = '#010c3f';
const artemisColor = '#415a74';
const ravenousColor = '#cca353';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: offBlack,
    position: 'absolute',
    border: 'none',
  },
};

function App() {


  const [backgroundColor, setBackgroundColor] = useState(offBlack);
 
  useEffect(() => {
    console.log(`Changing Background ${backgroundColor === offBlack ? 'back ': ''}to ${backgroundColor}...`);
  }, [backgroundColor]);
 
  const artemisHandler = () => {
    setBackgroundColor(artemisColor);
  }
  const jammmingHandler = () => {
    setBackgroundColor(jammmingColor);
  }
  const ravenousHandler = () => {
    setBackgroundColor(ravenousColor);
  }
  const exitHandler = () => {
    setBackgroundColor(offBlack);
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#root')

  return (
    <>
    <Header backgroundColor={backgroundColor} openModal={openModal} />
    <div className="App" style={{"backgroundColor": backgroundColor}}>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="About Modal"
        style={modalStyles}
        overlayClassName="ModalOverlay"
        closeTimeoutMS={200}
      >
        <About closeModal={closeModal} />
      </Modal>
        <ul className="Portfolio" id="Portfolio">
          <li onMouseEnter={artemisHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Artemis/" target="_blank" rel="noreferrer">Artemis for Reddit</a></li>
          <li onMouseEnter={jammmingHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Jammming/" target="_blank" rel="noreferrer">Jammming for Spotify</a></li>
          <li onMouseEnter={ravenousHandler} onMouseLeave={exitHandler}><a href="https://ejuneau.github.io/CA_Ravenous/" target="_blank" rel="noreferrer">Ravenous for Yelp</a></li>
        </ul>
    </div>
    <Footer backgroundColor={backgroundColor}/>
    </>
  );
}

export default App;
