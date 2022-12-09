import { Route,Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import PProvider from './context/PProvider';//Context

function App() {
  return (
    <PProvider>
      <div className="App">
      <NavBar/>
        <Routes>
        <Route path='/'
          element={<Home/>}
        />
        <Route path='/about'
          element={<About/>}
        />
        </Routes>
        <Footer/>
      </div>
    </PProvider>
  );
}

export default App;
