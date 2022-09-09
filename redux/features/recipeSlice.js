import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/recipes`
  );
  return response?.data?.data;
});

const recipeEntity = createEntityAdapter({
  selectId: (recipe) => recipe.id,
});

const recipeSlice = createSlice({
  name: "recipe",
  initialState: recipeEntity.getInitialState(),
  extraReducers: {
    [getRecipes.fulfilled]: (state, action) => {
      recipeEntity.setAll(state, action.payload);
    },
  },
});

export const recipeSelectors = recipeEntity.getSelectors(
  (state) => state.recipe
);
export default recipeSlice.reducer;
