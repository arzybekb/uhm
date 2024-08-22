import { createSlice } from "@reduxjs/toolkit";

interface IOrder {
  title: string;
  price: number;
  url: string;
}
interface CounterState {
  totalCount: number;
  orders: IOrder[];
  order: IOrder;
}

const initialState: CounterState = {
  totalCount: 0,
  orders: [],
  order: {
    title: "",
    price: 0,
    url: "",
  },
};

const counterSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state) => {
      state.totalCount += 1;
    },
    decrement: (state) => {
      state.totalCount -= 1;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { increment, decrement, setOrder } = counterSlice.actions;

export default counterSlice.reducer;
