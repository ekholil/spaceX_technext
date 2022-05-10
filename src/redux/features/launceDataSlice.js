import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { isAfter, sub } from 'date-fns';

export const getLaunches = createAsyncThunk("launces, getLaunces", async () => {
    return fetch('https://api.spacexdata.com/v3/launches').then((res) => res.json())
})

const launceSlice = createSlice({
    name: 'launces',
    initialState: {
        launces: [],
        filteredItems: [],
        loading: false,
    },
    reducers: {
        searchByRocketName: (state, action) => {
            state.filteredItems = state.launces.filter(item => item.rocket.rocket_name.toLowerCase().includes(action.payload.toLowerCase()))
        }, 
        filterByStatus: (state, action) => {
            if(action.payload === 'success'){
                state.filteredItems = state.launces.filter(item => item.launch_success === true)
            } else{
                state.filteredItems = state.launces.filter(item => item.launch_success === false)
            }
            
        },
        filterByUpcoming: (state, action) => {
            if(action.payload === 'upcoming'){
                state.filteredItems = state.launces.filter(item => item.upcoming === true)
            } else{
                state.filteredItems = state.launces.filter(item => item.upcoming === false)
            }
            
        },
        fiterByLaunchDate: (state, action) => {
          const today = new Date()
          const lastWeek = sub(today, {weeks: 1})  
          const lastMonth = sub(today, {months: 1})  
          const lastYear = sub(today, {years: 1})
          const last5Year = sub(today, {years: 5})
          const last6Year = sub(today, {years: 6})
          if(action.payload === 'last_week'){
              state.filteredItems = state.launces.filter(item => isAfter(new Date(item.launch_date_utc), lastWeek) )
          }
          if(action.payload === 'last_month'){
              state.filteredItems = state.launces.filter(item => isAfter(new Date(item.launch_date_utc), lastMonth) )
          }
          if(action.payload === 'last_year'){
              state.filteredItems = state.launces.filter(item => isAfter(new Date(item.launch_date_utc), lastYear) )
          }
          if(action.payload === 'last_5_year'){
              state.filteredItems = state.launces.filter(item => isAfter(new Date(item.launch_date_utc), last5Year) )
          }
          if(action.payload === 'last_6_year'){
              state.filteredItems = state.launces.filter(item => isAfter(new Date(item.launch_date_utc), last6Year) )
          }
          console.log(lastMonth, lastWeek, lastYear)  
        },
    },
    extraReducers: {
        [getLaunches.pending]: (state, action) => {
            state.loading = true;
        },
        [getLaunches.fulfilled]: (state, action) => {
            state.loading = true;
            state.launces = action.payload;
        },
        [getLaunches.rejected]: (state, action) => {
            state.loading = false;
        },
    },
})

export const {searchByRocketName, filterByStatus, filterByUpcoming, fiterByLaunchDate} = launceSlice.actions
export default launceSlice.reducer;