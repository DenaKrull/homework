import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import NotFound from './NotFound';
import Header from './Header';
import Users from './Users';

function App() {
  return (
    <BrowserRouter>
    <Users /> 
    <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
