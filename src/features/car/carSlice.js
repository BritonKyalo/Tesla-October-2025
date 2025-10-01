import {CreateSlice} from '@reduxjs/toolkit'

const initialState={
    cars:["Model 1","Model 2","Model 3","Model 4"]
}

const carSlice=CreateSlice({
    name:'car',
    initialState,
    reducers:{}
})

export const selectCars= state => state.car.cars
export default carSlice.reducer