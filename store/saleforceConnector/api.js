import axios from "axios"
import { SALEFORCE_CONNECTOR_TOKEN } from "react-native-dotenv"
const saleforceConnector = axios.create({
  baseURL: "https://yourinstance.salesforce.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SALEFORCE_CONNECTOR_TOKEN}`
  }
})
function saleforceconnector_get_services_data_v211_query_read(payload) {
  return saleforceConnector.get(`/services/data/v21.1/query/`, {
    params: { q: payload.q }
  })
}
export const apiService = {
  saleforceconnector_get_services_data_v211_query_read
}
