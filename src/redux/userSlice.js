/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: {name: 'Jang', age: 20},
    reducers: {
      changName(state) {
        state.name = 'park'
      },
      increase(state, action) {
        state.age += action.payload
      }
    }
  })

  export default user;