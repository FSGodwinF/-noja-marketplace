import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<h2 className='text-center fw-bold m'>Page Not Found</h2>}/>
      </Routes>
    </>
  )
}

export default App
