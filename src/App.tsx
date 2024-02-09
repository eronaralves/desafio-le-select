import { BrowserRouter as RouterDom } from "react-router-dom";
import { AppRouter } from "./routes";

// Theme
import { GlogalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlogalStyles />
      <RouterDom>
        <AppRouter />
      </RouterDom>
    </ThemeProvider>
  );
}

export default App;
