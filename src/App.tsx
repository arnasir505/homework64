import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './containers/Posts/Posts';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/add' element={<h1>add post</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contacts' element={<h1>Contacts</h1>} />
      </Routes>
    </>
  );
}

export default App;
