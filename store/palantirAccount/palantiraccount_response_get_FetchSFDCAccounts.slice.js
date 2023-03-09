import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const palantiraccount_get_sfdc_accounts_list = createAsyncThunk(
  "palantiraccount_response_get_FetchSFDCAccounts/palantiraccount_get_sfdc_accounts_list",
  async payload => {
    const response = await apiService.palantiraccount_get_sfdc_accounts_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const palantiraccount_response_get_FetchSFDCAccountsSlice = createSlice({
  name: "palantiraccount_response_get_FetchSFDCAccounts",
  initialState,
  reducers: {},
  extraReducers: {
    [palantiraccount_get_sfdc_accounts_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [palantiraccount_get_sfdc_accounts_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [palantiraccount_get_sfdc_accounts_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  palantiraccount_get_sfdc_accounts_list,
  slice: palantiraccount_response_get_FetchSFDCAccountsSlice
}
