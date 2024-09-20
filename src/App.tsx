import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserList } from './pages/UserList/UserList';
import { UserProfile } from './pages/UserProfile/UserProfile';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
