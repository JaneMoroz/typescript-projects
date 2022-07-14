import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: grey,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hi!</h1>
    </ThemeProvider>
  );
}

export default App;
