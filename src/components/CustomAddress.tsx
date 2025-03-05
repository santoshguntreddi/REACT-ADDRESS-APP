import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionActions,
  Box,
  Button,
  Checkbox,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import States from "../utilities/states.json";
import { AddressInterface } from "../interfaces/address.interface";
import {
  addAddress,
  updateAddress,
  deleteAddress,
} from "../redux/slices/addressSlice";
import { useAppDispatch } from "../redux/store";

interface CustomAddressPropsInterface {
  index: number;
  isFirst: boolean;
  address: AddressInterface;
}

export default function CustomAddress({
  index,
  address,
  isFirst,
}: CustomAddressPropsInterface) {
  const [getFormData, setFormData] = useState<AddressInterface>({ id: "" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFormData({ ...address });
  }, [address]);

  const handleChange = (type: string, value: string | boolean | undefined) => {
    setFormData({ ...getFormData, [type]: value });
  };

  const handleSave = () => {
    dispatch(updateAddress({ index, address: { ...getFormData } }));
  };

  const handleAddMore = () => {
    dispatch(addAddress());
  };

  const handleDelete = () => {
    dispatch(deleteAddress(index));
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography sx={{ fontWeight: "bold" }}>Address Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form" noValidate sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  First Line
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.firstLine || ""}
                  onChange={(event) =>
                    handleChange("firstLine", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Second Line
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.secondLine || ""}
                  onChange={(event) =>
                    handleChange("secondLine", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Third Line
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.thirdLine || ""}
                  onChange={(event) =>
                    handleChange("thirdLine", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Fourth Line
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.fourthLine || ""}
                  onChange={(event) =>
                    handleChange("fourthLine", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Fifth Line
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.fifthLine || ""}
                  onChange={(event) =>
                    handleChange("fifthLine", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Post Code <Link>Get Address</Link>
                </Typography>
                <TextField
                  disabled={!isFirst}
                  value={getFormData.postCode || ""}
                  onChange={(event) =>
                    handleChange("postCode", event.target.value)
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Address List
                </Typography>
                <Select
                  disabled={!isFirst}
                  value={getFormData.addressList || ""}
                  onChange={(event) => {
                    handleChange("addressList", event.target.value);
                  }}
                >
                  {States.map((state: { label: string; value: string }) => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mt={3}>
                  Prefer not to say{" "}
                  <Checkbox
                    disabled={!isFirst}
                    checked={getFormData.prefer || false}
                    onChange={(event) =>
                      handleChange("prefer", event.target.checked)
                    }
                  />
                </Typography>
                <Typography variant="subtitle2" color="warning">
                  Advice cannot be provided without an address
                </Typography>
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "bold" }} mb={1}>
                  Date moved in
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      disabled={!isFirst}
                      value={dayjs(getFormData.movedDate || "")}
                      onChange={(newValue) =>
                        handleChange(
                          "movedDate",
                          newValue?.format("MM/DD/YYYY")
                        )
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <AccordionActions>
          {isFirst ? (
            <Button variant="contained" color="error" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="contained" color="warning" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </AccordionActions>
      </AccordionDetails>
      {isFirst && (
        <Button sx={{ ml: 2, mb: 2 }} color="error" onClick={handleAddMore}>
          Add more
        </Button>
      )}
    </Accordion>
  );
}
