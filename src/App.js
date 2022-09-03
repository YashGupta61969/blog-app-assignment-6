import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blog/:id' element={<Blog/>}/>
     </Routes>
    </div>
  );
}

export default App;
