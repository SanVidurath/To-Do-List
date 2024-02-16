// App.tsx
import { Grid, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CompletedItems from "./components/CompletedItems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActiveItems from "./components/ActiveItems";
import NotFound from "./components/NotFound";

const theme: Theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          sx={{ minHeight: "100vh" }}
        >
          <Header />
          {/* <RouterProvider router={router} /> */}
          <Routes>
            <Route path="/To-Do-List/" element={<ListItems />} />
            <Route path="/To-Do-List/completed" element={<CompletedItems />} />
            <Route path="/To-Do-List/active" element={<ActiveItems />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
