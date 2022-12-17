import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"form",
    initialState:{
        cardholderName: "",
        cardNumber:"",
        month:"",
        year:"",
        cvc:"",
        isForm: false
    },
    reducers:{
        changeCardholderName(state, action){
            state.cardholderName = action.payload;
        },
        changeCardNumber(state,action){
            state.cardNumber = action.payload;
        },
        changeMonth(state, action){
            state.month = action.payload;
        },
        changeYear(state,action){
            state.year = action.payload
        },
        changeCVC(state, action){
            state.cvc = action.payload;
        },
        changeIsForm(state, action){
            state.isForm = action.payload;
        },
        clearDate(state){
            state.cardholderName = "";
            state.cardNumber = "";
            state.cvc = "";
            state.month = "";
            state.year = "";
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice;
