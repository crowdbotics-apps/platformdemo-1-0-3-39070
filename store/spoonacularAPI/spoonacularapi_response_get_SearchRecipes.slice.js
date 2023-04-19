import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const spoonacularapi_get_recipes_complexSearch_list = createAsyncThunk(
  "spoonacularapi_response_get_SearchRecipes/spoonacularapi_get_recipes_complexSearch_list",
  async payload => {
    const response = await apiService.spoonacularapi_get_recipes_complexSearch_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const spoonacularapi_response_get_SearchRecipesSlice = createSlice({
  name: "spoonacularapi_response_get_SearchRecipes",
  initialState,
  reducers: {},
  extraReducers: {
    [spoonacularapi_get_recipes_complexSearch_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [spoonacularapi_get_recipes_complexSearch_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [spoonacularapi_get_recipes_complexSearch_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  spoonacularapi_get_recipes_complexSearch_list,
  slice: spoonacularapi_response_get_SearchRecipesSlice
}
