import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductCard from './components/ProductCard';

function App() {

  return (
    <>
    <Router>
        <Routes>
        <Route path ="/" element = {<Home/>} />
       <Route path ="/products/:id" element = {<ProductCard/>} />
       </Routes>
    </Router>

    </>
  )
}

export default App
