import { Box } from "@mui/material";
import { useAppSelector } from "../redux/store";
import { AddressInterface } from "../interfaces/address.interface";
import CustomAddress from "../components/CustomAddress";

export default function Addresses() {
  const addresses = useAppSelector((state) => state.addresses.addresses);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          padding: 2,
        }}
      >
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
