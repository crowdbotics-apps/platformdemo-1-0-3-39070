import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const spoonacularapi_get_recipes_random_list = createAsyncThunk(
  "spoonacularapi_response_get_GetReciepies/spoonacularapi_get_recipes_random_list",
  async payload => {
    const response = await apiService.spoonacularapi_get_recipes_random_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const spoonacularapi_response_get_GetReciepiesSlice = createSlice({
  name: "spoonacularapi_response_get_GetReciepies",
  initialState,
  reducers: {},
  extraReducers: {
    [spoonacularapi_get_recipes_random_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [spoonacularapi_get_recipes_random_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [spoonacularapi_get_recipes_random_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  spoonacularapi_get_recipes_random_list,
  slice: spoonacularapi_response_get_GetReciepiesSlice
}
