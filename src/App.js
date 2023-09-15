import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import Account from "./pages/Account"
import SignUp from "./pages/SignUp"
import ProtectedRoute from "./components/ProtectedRoute";
function App() {

  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>

          </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
