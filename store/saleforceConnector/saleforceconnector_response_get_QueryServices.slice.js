import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const saleforceconnector_get_services_data_v211_query_read = createAsyncThunk(
  "saleforceconnector_response_get_QueryServices/saleforceconnector_get_services_data_v211_query_read",
  async payload => {
    const response = await apiService.saleforceconnector_get_services_data_v211_query_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const saleforceconnector_response_get_QueryServicesSlice = createSlice({
  name: "saleforceconnector_response_get_QueryServices",
  initialState,
  reducers: {},
  extraReducers: {
    [saleforceconnector_get_services_data_v211_query_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [saleforceconnector_get_services_data_v211_query_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [saleforceconnector_get_services_data_v211_query_read.rejected]: (
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
  saleforceconnector_get_services_data_v211_query_read,
  slice: saleforceconnector_response_get_QueryServicesSlice
}
