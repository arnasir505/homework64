import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Posts from './containers/Posts/Posts';
import NewPost from './containers/NewPost/NewPost';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/add' element={<NewPost />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contacts' element={<h1>Contacts</h1>} />
        <Route
          path='*'
          element={<h1 className='text-center mt-5'>Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
