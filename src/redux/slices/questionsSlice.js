import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  testId: -1,
  rightAnswers: []
}

export const questionsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTestId: (state, action) => {
      state.testId = action.payload
    },
  },
})

export const { setTestId } = questionsSlice.actions
export default questionsSlice.reducer