import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import AddItem from './Pages/Inventory/AddItem';
import ManageItems from './Pages/Inventory/ManageItems';
import MyItems from './Pages/Inventory/MyItems';
import UpdateProduct from './Pages/Inventory/UpdateProduct';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto px-6'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={<RequireAuth><ManageItems /></RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem /></RequireAuth>}></Route>
        <Route path='/tv/:id' element={<RequireAuth><UpdateProduct /></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems /></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
