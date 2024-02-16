// NotFound.tsx
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textTransform: "uppercase" }}>Check URL Endpoint</h1>
      <Link to="/">
        <Button variant="contained">Click Here</Button>
      </Link>
    </div>
  );
};

export default NotFound;
