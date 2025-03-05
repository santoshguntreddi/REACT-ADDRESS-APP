import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../redux/store";
import { AddressInterface } from "../interfaces/address.interface";
import CustomAddress from "../components/CustomAddress";
import { Link } from "react-router";

export default function Addresses() {
  const addresses = useAppSelector((state) => state.addresses.addresses);

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
        Address Page
      </Typography>
      <Box>
        <Link to="/">
          <Button sx={{ ml: 2, mb: 2 }}>Previous</Button>
        </Link>
        {addresses.map((address: AddressInterface, index: number) => (
          <CustomAddress
            key={address.id}
            index={index}
            isFirst={index === 0}
            address={address}
          />
        ))}
      </Box>
    </Box>
  );
}
