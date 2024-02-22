import './App.css';
import Header from './components/Header';
import RecordsListPage from './pages/RecordsListPage';
import RecordPage from './pages/RecordPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {

  return (
    <Router>
        <div className='container dark'>
          <div className='app'>
              <Header />
              <Routes>
                <Route path="/" exact element={<RecordsListPage />}/>
                <Route path="/record/:id" element={<RecordPage />}/>
              </Routes>
          </div>
        </div>
    </Router>

  );
}

export default App;
