import { createSlice } from "@reduxjs/toolkit";
// import tuits from "../tuit-summary-list/tuits.json";
import { findTuitsThunk,deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../services/tuits-thunk";
const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState,
    extraReducers: {
        [updateTuitThunk.fulfilled]:
            (state,{payload}) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
            },
        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
        ,
        addLike(state, action) {
            const tuit = state.find(tuit => tuit._id === action.payload);
            if (tuit && !tuit.liked) {
                tuit.liked = true;
                tuit.likes += 1;
            }
        }
    }
})

export const { createTuit, deleteTuit, addLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;