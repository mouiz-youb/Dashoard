
import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ContextProvider } from './context/ContextProvider.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
// createRoot(document.getElementById('root')).render(
//   // <ContextProvider>
//       <StrictMode>
//         <ContextProvider>
//           <App />
//         </ContextProvider>
//       </StrictMode>,
//   {/* </ContextProvider> */}
// );
// ReactDOM.render(<App/>,document.getElementById("root"))
  // <StrictMode>
  //   <ContextProvider>
  //     <App />
  //   </ContextProvider>
  // </StrictMode>,
  // <App/>