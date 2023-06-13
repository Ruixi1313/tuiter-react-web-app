import axios from "axios"
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
// const TUITS_API = "https://tuiter-node-server-app-igy9.onrender.com/api/tuits";
export const createTuit = async(tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  
export const deleteTuit = async(id) => {
    const response = await axios.delete(`${TUITS_API}/${id}`)
    return response.data
}
export const findTuits = async()=>{
    const response = await axios.get(TUITS_API)
    const tuits = response.data
    return tuits
} 