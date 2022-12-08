import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/group";
import Header from "./components/header";
import Room from "./components/room";
import Sidebar from "./components/sidebar";
import Teacher from "./components/teacher";
import Foundation from "./views/foundation";
import Home from "./views/home";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          
          <Header />
          <div className="main">
            <Sidebar />
            <div className="wrapper">
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path='/foundation' element={<Foundation />} />
                <Route path='/teacher' element={<Teacher />} />
                <Route path='/room' element={<Room />} />
                <Route path='/group' element={<Group />} />
              </Routes>
            </div>
          </div>

        </BrowserRouter>   
    </div>
  )
}

export default App;
