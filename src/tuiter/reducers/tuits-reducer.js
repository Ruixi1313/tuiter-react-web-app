import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../services/tuits-thunks";
const initialState = {
   tuits: [],
   loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "0h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "disliked": false
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits .filter(t => t._id !== payload)
  },
  [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
  [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
      }


 },

 reducers: {

    likeButton(state, action) {
      console.log(action.payload);
      const tuit = state.tuits.find((tuit) => tuit._id === action.payload.tuitId);
      console.log(tuit);
    },
    dislikeButton(state, action) {
      console.log(action.payload);
      const tuit = state.tuits.find((tuit) => tuit._id === action.payload.tuitId);
      console.log(tuit);
    }
  }
 
});

export const {createTuit,deleteTuit,likeButton,dislikeButton} = tuitsSlice.actions;
export default tuitsSlice.reducer;