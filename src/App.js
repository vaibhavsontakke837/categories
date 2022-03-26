import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Categories from './components/categories';
import AddCategories from './components/addCategories';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Categories /> }></Route>
                <Route path="/addcategories" element={ <AddCategories /> }></Route>
                <Route path="/addcategories/:userId" element={ <AddCategories /> }></Route>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
