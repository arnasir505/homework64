import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Posts from './containers/Posts/Posts';
import NewEditPost from './containers/NewEditPost/NewEditPost';
import FullPost from './containers/FullPost/FullPost';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/add' element={<NewEditPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/posts/:id' element={<FullPost />} />
        <Route path='/posts/:id/edit' element={<NewEditPost />} />
        <Route
          path='*'
          element={<h1 className='text-center mt-5'>Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
