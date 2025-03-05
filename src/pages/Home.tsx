import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
        Home Page
      </Typography>
      <Box>
        <Link to="/address">
          <Button sx={{ ml: 2, mb: 2 }}>Address Details</Button>
        </Link>
      </Box>
    </Box>
  );
}
