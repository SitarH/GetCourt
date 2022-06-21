
import MainLayout from './Components/Layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import Register from './Components/Forms/Register';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
