import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import AddAd from './components/pages/AddAd';
import EditAd from './components/pages/EditAd';
import SearchResults from './components/pages/SearchResults'; 
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout';
import SingleAd from './components/pages/SingleAd';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ads/:id" element={<SingleAd />} />
          <Route path="/ads/add" element={<AddAd />} />
          <Route path="/ads/edit/:id" element={<EditAd />} />
          <Route path="/ads/search/:searchPhrase" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;