import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TextBox from './components/TextBox';
// import Home from './components/Home';
import CheckboxExample from './components/CheckboxExample';
import ButtonExample from './components/ButtonExample';
import BrokenImageExample from './components/BrokenImageExample';
import AlertExample from './components/AlertExample';
import IframeExample from './components/IframeExample';
import NewWindowExample from './components/NewWindowExample';
import './App.css';
import NestedIframeExample from './components/NestedIframeExample';
import DoubleClickExample from './components/DoubleClickExample';
import DragAndDropExample from './components/DragAndDropExample';
import ScrollExample from './components/ScrollExample';
import TableExample from './components/TableExample';
// import PoweredByElementalSelenium from './components/PoweredByElementalSelenium';
import DropdownExample from './components/DropdownExample';
import SwipeGalleryExample from './components/swipeRightExample';
import WeblinksExample from './components/WeblinksExample';
import ForgetPassword from './components/ForgetpasswordExample';
import CalanderHeader from './components/CalanderHeader';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<TextBox />} />
          <Route path="/example/text-box" element={<TextBox />} />
          <Route path="/example/checkbox" element={<CheckboxExample />} />
          <Route path="/example/button" element={<ButtonExample />} />
          <Route path="/example/broken-images" element={<BrokenImageExample />} />   {/* not working */} 
          <Route path='/example/java-script-alert' element={<AlertExample />} />
          <Route path='/example/iframe' element={<IframeExample />} />
          <Route path='example/nested-iframe' element={<NestedIframeExample/>} />
          <Route path='example/multiple-windows' element={<NewWindowExample/>} />
          <Route path='example/double-click' element={<DoubleClickExample/>} />
          <Route path='example/drag-and-drop' element={<DragAndDropExample/>} />
          <Route path='example/scroll' element={<ScrollExample/>} />
          <Route path='example/table' element={<TableExample/>} />
          <Route path='example/drop-down' element={<DropdownExample/>} />
          <Route path='example/swipe-from-right-to-left' element={<SwipeGalleryExample/>} />
          <Route path='example/web-links' element={<WeblinksExample/>} />
          <Route path='/example/forgotPasswords' element={<ForgetPassword/>} />
          <Route path='/example/calander' element={<CalanderHeader/>} />
          {/* <Route path='example/powered-by-elemental-selenium' element={<PoweredByElementalSelenium/>} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
