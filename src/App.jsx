import {  Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Layout from './layout/Layout'
import { AuthProvider } from './context/AuthContext'



function App() {
 
  return (
    <>
    <AuthProvider>
       <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<h2 className='text-center fw-bold m'>Page Not Found</h2>}/>
          <Route path="/product/:id" element={<ProductDetailsPage/>}/>
        </Routes>
      </Layout>
    </AuthProvider>
     
    </>
  )
}

export default App
