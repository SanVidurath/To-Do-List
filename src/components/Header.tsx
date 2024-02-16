// Header.tsx
import React, { ChangeEvent, useState } from "react";
import { useGlobalContext } from "../contexts/hooks";
import { StyledTypography } from "./Styles";
import { Button, Grid, TextField } from "@mui/material";

const Header = () => {
  const context = useGlobalContext();
  const [itemText, setItemText] = useState<string>("");

  if (!context) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textTransform: "uppercase" }}>Loading...</h1>
      </div>
    );
  }

  const { listItems, setListItems } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemText(value);
  };

  const handleButtonChange = (e: React.MouseEvent) => {
    e.preventDefault();
    if (itemText !== "") {
      setListItems([
        ...listItems,
        { id: Date.now(), value: itemText, isChecked: false },
      ]);
      setItemText("");
    }
  };

  return (
    <>
      <StyledTypography variant="h4" gutterBottom>
        Things to do
      </StyledTypography>
      <Grid container alignItems="center" justifyContent="center" gap={2}>
        <Grid item xs={12} md={8} justifyContent="center" alignSelf="end">
          <TextField
            label="Add Item"
            fullWidth
            value={itemText}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item justifyContent="center" alignSelf="center">
          <Button variant="contained" onClick={handleButtonChange}>
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
