import axios from "axios";

const uri='http://localhost:8222';


const authHeader=localStorage.getItem('token')
const headers={
    'Authorization':`Bearer ${authHeader}`,
    'Content-Type':'application/json'
}

//Authentication
export const userlogin=(data)=>axios.post(`${uri}/ecom/auth/login`,data);
export const register=(data)=>axios.post(`${uri}/ecom/auth/register`,data);
export const getUserbyId = (id) => axios.get(`${uri}/ecom/user/find/${id}`,{headers})  
export const deleteUserId=(uid)=>axios.delete(`${uri}/ecom/user/delete/${uid}`,{headers});
//Product
export const getHotelById=(hid)=>axios.get(`${uri}/ecom/hotel/gethotelbyId/${hid}`,{headers});
export const editHotel=(id,data)=>axios.put(`${uri}/ecom/hotel/edit/${id}`,data,{headers});
// export const deleteHotel=(id)=>axios.delete(`${uri}/api/v1/admin/${id}`,{headers});
// export const createHotel=(data)=>axios.post(`${uri}/api/v1/admin`,data,{headers});
export const addOrder=(order)=> axios.post(`${uri}/ecom/order/add`,order,{headers});
export const getHotels=()=>axios.get(`${uri}/ecom/hotel/get`,{headers})
export const getOrderCount=()=>axios.get(`${uri}/ecom/order/getCount`,{headers})
export const getAllOrder=()=>axios.get(`${uri}/ecom/order/getAllOrders`,{headers});
//Admin
export const getAllUser=()=>axios.get(`${uri}/ecom/user/get`,{headers})
export const addHotels=(data)=>axios.post(`${uri}/ecom/hotel/add`,data,{headers})
export const addMenu=(data)=>axios.post(`${uri}/ecom/menu/add`,data,{headers})
//Feedback
export const addFeedback=(data)=>axios.post(`http://localhost:8222/feedback/add`,data,{headers})
export const getFeedback=()=>axios.get(`${uri}/feedback/get`,{headers})
export const deleteFeedback=({fid})=>axios.delete(`${uri}/feedback/delete/${fid}`,{headers})