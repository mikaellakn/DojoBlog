import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_name: '',
  },
  reducers: {
    setUserName: (state, action) =>{
      state.user_name = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserName } = userSlice.actions

export default userSlice.reducer