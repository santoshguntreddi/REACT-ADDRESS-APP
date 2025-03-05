import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uniqId } from "uuid";
import type { RootState } from "../store";
import { AddressInterface } from "../../interfaces/address.interface";

interface AddressState {
  addresses: AddressInterface[];
}

const initialState: AddressState = {
  addresses: [{ id: uniqId() }],
};

export const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddress: (state) => {
      state.addresses.unshift({ id: uniqId() });
    },
    updateAddress: (
      state,
      action: PayloadAction<{ index: number; address: AddressInterface }>
    ) => {
      const { index, address } = action.payload;
      if (state.addresses[index]) {
        state.addresses[index] = address;
      }
    },
    deleteAddress: (state, action: PayloadAction<number>) => {
      state.addresses.splice(action.payload, 1);
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } =
  addressesSlice.actions;
export const selectAddresses = (state: RootState) => state.addresses;
export default addressesSlice.reducer;
