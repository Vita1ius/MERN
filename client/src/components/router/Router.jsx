import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from '../app/App';
import Login from '../login/Login';
import Test from '../test/Test';
import Register from '../register/Register';
const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<App/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Test/>} path='/tests'/>
      <Route element={<Register/>} path='/register'/>
      <Route  path='*' element={<div>Not found</div>}/>
    </Routes>
      </BrowserRouter>

}
export default Router