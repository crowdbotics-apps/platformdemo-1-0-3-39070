import axios from "axios"
const spoonacularAPI = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function spoonacularapi_get_recipes_random_list(payload) {
  return spoonacularAPI.get(`/recipes/random`, {
    params: {
      limitLicense: payload.limitLicense,
      number: payload.number,
      apiKey: payload.apiKey
    }
  })
}
function spoonacularapi_get_recipes_complexSearch_list(payload) {
  return spoonacularAPI.get(`/recipes/complexSearch`, {
    params: {
      query: payload.query,
      cuisine: payload.cuisine,
      number: payload.number,
      limitLicense: payload.limitLicense
    }
  })
}
export const apiService = {
  spoonacularapi_get_recipes_random_list,
  spoonacularapi_get_recipes_complexSearch_list
}
