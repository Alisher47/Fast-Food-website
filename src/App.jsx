import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/home';
import RecipeDetail from './assets/pages/Recipe Detail/recipeDetail'; 
import About from './assets/pages/About/about';
import Blog from './assets/pages/Blog/blog';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        
        </Routes>
    </Router>
  );
}

export default App;
