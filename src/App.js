
import './App.css';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <p style={{backgroundColor: 'red'}}>{">> App.js working"}</p>
      <Navbar/>
      <MovieCard/>
    </div>
  );
}

export default App;
