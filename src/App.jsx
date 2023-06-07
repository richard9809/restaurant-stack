import { Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Payment from './Pages/Payment';
import Orders from './Pages/Orders';
import MakeOrder from './Pages/MakeOrder';
import Checkout from './Pages/Checkout';
import Edit from './Pages/Edit';

function App() {

  return (
    <div className='app'>
      <header className='navbar'>
        <Navbar />
      </header>
      <div className='content-wrapper '>
        <aside className='sidebar'>
          <Sidebar />
        </aside>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path='/orders/table/:id' element={<MakeOrder />} />
            <Route path='/orders/edit/:id' element={<Edit />} />
            <Route path='/orders/checkout/:id' element={<Checkout />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App

