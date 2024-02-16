// Footer.tsx
import { ChangeEvent, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
  StyledButton,
} from "./Styles";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/hooks";

const Footer = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
  const context = useGlobalContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const intervalId = setInterval(
      () => setTimeNow(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!context) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textTransform: "uppercase" }}>Loading...</h1>
      </div>
    );
  }

  const { setSearchTerm, searchTerm } = context;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div style={{ marginTop: "auto", textAlign: "center" }}>
      {searchTerm && (
        <Typography
          variant="h5"
          sx={{ color: "red", fontWeight: "bold", margin: "5px 0" }}
        >
          searchbar is not empty
        </Typography>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              sx={{
                flexWrap: "wrap",
                justifyContent: isSmallScreen ? "center" : "flex-start",
              }}
            >
              <Link to="/To-Do-List/">
                <StyledButton variant="contained">All</StyledButton>
              </Link>
              <Link to="/To-Do-List/active">
                <StyledButton variant="contained">Active</StyledButton>
              </Link>

              <Link to="/To-Do-List/completed">
                <StyledButton variant="contained">Completed</StyledButton>
              </Link>

              <Search sx={{ margin: "10px 0" }} onChange={handleSearch}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <footer style={{ margin: "30px 0 20px" }}>{timeNow}</footer>
    </div>
  );
};

export default Footer;
