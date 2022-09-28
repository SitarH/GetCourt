import MainLayout from './Components/Layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import sand from '../src/Asset/Images/sand2.jpg';
import Wrapper from '../src/Components/UI/Wrapper'
//import Sidebar from './Components/NavBar/Sidebar';


function App() {
  return (
    <div style={{ backgroundImage: `url(${sand})` ,height: '100vh'}}>
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
