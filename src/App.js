import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/info">О городе</Link>
      <Link to="/MainAttraction">Главная достопримечательность</Link>
      <Link to="/Attractions">Достопримечательности</Link>
      <Link to="/CityPhotos">Фотографии города</Link>
    </div>
  );
}

export default App;
