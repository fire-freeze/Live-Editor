import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  currentValue: string;
}

const initialState: StateProps = {
  currentValue: "",
};

const CodeSlice = createSlice({
  name: "Code",
  initialState,
  reducers: {
    setValue(state, { payload }) {
      state.currentValue = payload;
      console.log(payload)
    },
  },
});

export const { setValue } = CodeSlice.actions;
export default CodeSlice.reducer;
