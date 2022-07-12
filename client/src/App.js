import MainLayout from './Components/Layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
//import Sidebar from './Components/NavBar/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
  );
}

export default App;
