import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/group";
import Header from "./components/header";
import Room from "./components/room";
import Sidebar from "./components/sidebar";
import Teachers from "./components/teachers";
// import Instructor from "./components/teachers/instructor";
import Foundation from "./views/Foundation";
import Home from "./views/Home";

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
                <Route path='/teachers' element={<Teachers />} />
                <Route path='/room' element={<Room />} />
                <Route path='/group' element={<Group />} />
                {/* <Route path='/teachers/instructor' element={<Instructor />} /> */}
              </Routes>
            </div>
          </div>
        </BrowserRouter>   
    </div>
  )
}

export default App;
