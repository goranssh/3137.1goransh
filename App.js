import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';
import Header from './Header';
import Footer from './Footer';
import Image from './image';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />

                    <Route path="/" element={
                        <>
                        </>
                    } />
                </Routes>
            </div>
            <Image/>
            <Footer/>
        </Router>
    );
}

export default App;
