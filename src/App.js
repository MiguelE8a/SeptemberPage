import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header.jsx'
import VideoPlayer from './component/Video'
import Somos from './component/Somos'
import Servicios from './component/Servicios'
import TrabajosRealizados from './component/TrabajosRealizados'

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <Somos/>
      <Servicios/>
      <TrabajosRealizados/>
    </>
  );
}

export default App;
