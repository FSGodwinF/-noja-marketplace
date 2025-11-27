import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<h2 className='text-center fw-bold m'>Page Not Found</h2>}/>
        <Route path="/product/:id" element={<ProductDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
