import '../index.css';
import Video from "../images/FORMACIO_V1.mp4";

// import VideoPlayer from "react-video-js-player";
import { Navbar, Button } from './components/components';
import { Link } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='text-black'>
        <h1 className='flex justify-center p-4 text-3xl'>Benvingut a la formació de RGPD!</h1>
        <div className='flex justify-center'>
          {/* <VideoPlayer
            src="../images/FORMACIO_V1.mp4"
            portal=""
          /> */}
          <video controls>
            <source src={Video} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div className='flex justify-center p-20'>
        <Link to={"/preguntes"}>
          <Button text="Accedeix al test"/>
        </Link>
      </div>
    </div>
  );
}

export default App;
