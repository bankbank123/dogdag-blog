import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import Routes and Route
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './App.css'


function App() {

  return (
    <>
      <Router>
        <div>
          

          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
