import { BrowserRouter as RouterDom } from "react-router-dom";
import { AppRouter } from "./routes";

// Theme
import { GlogalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <GlogalStyles />
      <RouterDom>
        <AppRouter />
      </RouterDom>
    </ThemeProvider>
  );
}

export default App;
