import axios from "axios"
import { PALANTIR_ACCOUNT_TOKEN } from "react-native-dotenv"
const palantirAccount = axios.create({
  baseURL: "https://api.palantir.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${PALANTIR_ACCOUNT_TOKEN}`
  }
})
function palantiraccount_get_sfdc_accounts_list(payload) {
  return palantirAccount.get(`/sfdc/accounts`, {
    params: { filter: payload.filter, limit: payload.limit }
  })
}
export const apiService = { palantiraccount_get_sfdc_accounts_list }
