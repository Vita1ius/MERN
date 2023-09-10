import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from '../app/App';
import Login from '../login/Login';
import Tests from '../tests/Tests';
import Register from '../register/Register';
import Test from '../test/Test';
import MyTests from '../myTests/MyTests';
import TestResults from '../testResults/TestResults';
import CreateTest from '../createTest/CreateTest';
const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<App/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Tests/>} path='/tests'/>
      <Route element={<MyTests/>} path='/myTests'/>
      <Route element={<Test/>} path='/test/:id'/>
      <Route element={<TestResults/>} path='/myTestResults/:id'/>
      <Route element={<Register/>} path='/register'/>
      <Route element={<CreateTest/>} path='/createTest'/>
      <Route  path='*' element={<div>Not found</div>}/>
    </Routes>
      </BrowserRouter>

}
export default Router