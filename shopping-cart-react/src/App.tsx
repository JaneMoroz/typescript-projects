import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, grey, pink } from "@mui/material/colors";
import { Container } from "@mui/material";
import { Home, Store, About } from "./pages";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: pink[900],
    },
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
    <ShoppingCartProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container sx={{ marginBottom: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}

export default App;
