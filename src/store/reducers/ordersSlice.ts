import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../types/Order";

interface IOrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: IOrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrdersRequest: (state) => {
      state.loading = true;
    },
    getOrdersSuccess: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },
    getOrdersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getOrdersRequest, getOrdersSuccess, getOrdersFailure } =
  ordersSlice.actions;

export default ordersSlice.reducer;