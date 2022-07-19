import '../index.css';
import {Navbar, Button} from './components/components';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Benvingut a la formació de RGPD!</h1>
        Video
      </div>
      <div>
        <Link to={"/preguntes"}>
          <Button text="Accedeix al test"/>
        </Link>
      </div>
    </div>
  );
}

export default App;
