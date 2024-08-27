import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import {FiSettings } from 'react-icons/fi'
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import "./App.css";
import { Navbar ,Footer ,Sidebar ,ThemeSettings } from "./components";
import { Ecommerce ,Orders,Calendar,Employees,Stacked,
  KanbanX  ,Financial,ColorMapping,ColorPicker,Editor ,CustomersX
        ,Pyramid, Pie, Area, Line, Bar } from "./pages";
// import { useStateContext } from "./context/ContextProvider";
function App() {
  const activeMenu = true
  // const {activeMenu} = useStateContext()
  return (
    <div>
      <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex:1000}}>
              <TooltipComponent content="Settings" position="top">
                <button type="botton" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{backgroundColor:"blue",borderRadius:"50%"}}>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div 
              className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
              ><Sidebar/> is true </div>
            ) :(
              <div 
              className="w-0 dark:bg-secondary-dark-bg"
              ><Sidebar/> false </div>
            )}
            <div className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full 
            ${activeMenu ?"md:ml-72" : "flex-2"}`}>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
            </div>
            <Routes>
              {/* DashBoard  */}
              <Route path="/" element= {<Ecommerce/>} />
              <Route path="/ecommerce" element= {<Ecommerce/>} />
              {/* Pages */}
              <Route path="/Orders" element= {<Orders/>} />
              <Route path="/Employees" element= {<Employees/>}/>
              <Route path="/CustomersX" element= {<CustomersX/>} />
              {/* Apps */}
              <Route path="/kanbanX" element= {<KanbanX/>} />
              <Route path="/Editor" element= {<Editor />} />
              <Route path="/Calendar" element= {<Calendar />} />
              <Route path="/color-picker" element= {< ColorPicker/>} />
              {/* Charts  */}
              <Route path="/line" element= {<Line/>} />
              <Route path="/Area" element= {<Area/>} />
              <Route path="/Bar" element= {<Bar/>} />
              <Route path="/Pie" element= {<Pie/>} />
              <Route path="/Financial" element= {<Financial/>} />
              <Route path="/Pyramid" element= {<Pyramid/>} />
              <Route path="/Stacked" element= {<Stacked/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
