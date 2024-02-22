import './App.css';
import RecordsListPage from './pages/RecordsListPage';
import RecordPage from './pages/RecordPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
        <div className='container dark'>
          <div className='app'>
              <Routes>
                <Route path="/" exact element={<RecordsListPage />} />
                <Route path="/record/:id" element={<RecordPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>           
          </div>
        </div>
    </Router>

  );
}

export default App;
