
import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
{/* <React.StrictMode>
<StyledEngineProvider injectFirst>
  <Demo />
</StyledEngineProvider>
</React.StrictMode> */}
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