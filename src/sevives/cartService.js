import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (data)=>{
        const res = await customAPI.post('order-detail/add-detail',data);
        return res.data;
    }
)


export const getCart = createAsyncThunk(
    'cart/getCart',
    async ()=>{
        const res = await customAPI.get('/order-detail/order-details');
        return res.data;
    }
)



export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async (id)=>{
        const res = await customAPI.delete(`/order-detail/delete-detail/${id}`);
        return id;
    }
)

