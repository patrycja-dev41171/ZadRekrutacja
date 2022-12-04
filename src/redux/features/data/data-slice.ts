import { StarWarsData } from "../../../utils/types";
import { createSlice } from "@reduxjs/toolkit";

interface Data {
  starWarsData: StarWarsData[];
}

const initialState: Data = {
  starWarsData: [],
};

interface AddStarWarsData {
  payload: StarWarsData;
}

export const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addStarWarsData: (state: Data, action: AddStarWarsData) => {
      const array = state.starWarsData;
      const isFound = array.find((el) => {
        if (el.name === action.payload.name) {
          return true;
        } else {
          return false;
        }
      });
      if (!isFound) {
        array.push(action.payload);
        state.starWarsData = array;
      }
    },
  },
});

export const { addStarWarsData } = userSlice.actions;
