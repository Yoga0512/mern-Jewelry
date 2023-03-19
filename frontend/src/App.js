import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Jewelry</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
