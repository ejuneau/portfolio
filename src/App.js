import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Modal from 'react-modal';

const offBlack = "#0F0F0F";

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(offBlack);
 
  useEffect(() => {
    console.log(`Changing Background ${backgroundColor === offBlack ? 'back ': ''}to ${backgroundColor}...`);
  }, [backgroundColor]);
 
  const exitHandler = () => {
    setBackgroundColor(offBlack);
  }

  function openModal() {setIsOpen(true)}
  function closeModal() {setIsOpen(false)}
  Modal.setAppElement('#root');

  const sites = [
    {
      color: "#fc5130",
      link: "https://ejuneau.github.io/spyglass/",
      title: "Spyglass Eyewear"
    },
    {
      color: "#242f40",
      link: "https://ejuneau.github.io/soupgang/",
      title: "OpenKitchen"
    }
  ]

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
          {
            sites.map(site => {
              return <li className="list-item"><a onMouseEnter={() => setBackgroundColor(site.color)}  onMouseLeave={exitHandler} href={site.link} target="_blank" rel="noreferrer">{site.title}</a></li>
            })
          }
        </ul>
    </div>
    <Footer backgroundColor={backgroundColor}/>
    </>
  );
}

export default App;
