import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './app/routing/PrivateRoute';
import PublicRoute from './app/routing/PublicRoute';
import AdminDashboard from './app/content/adminDashboard/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<PublicRoute>{'<Login />'}</PublicRoute>} />
        <Route path="/unauthorized" element={<PublicRoute> {'<Unauthorized /> '}</PublicRoute>} />     
        {/* <Route path="/" element={<ValidateLogin />}> */}
          <Route path="/" element={<AdminDashboard/>}>
            <Route path="/widget" element={<PrivateRoute roles={[1,2]}>{'<EditWidget/>'}</PrivateRoute>} />
     
          </Route>
        {/* </Route> */}
    </Routes>
    {/* <ToastContainer
      autoClose={3000}
      draggable={false}
      position="top-right"
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnHover
    /> */}
   
  </BrowserRouter>
  );
}

export default App;
