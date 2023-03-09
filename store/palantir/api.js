import axios from "axios"
import { PALANTIR_USERNAME, PALANTIR_PASSWORD } from "react-native-dotenv"
const palantir = axios.create({
  baseURL: "https://www.Palantir.com",
  auth: { username: PALANTIR_USERNAME, password: PALANTIR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
