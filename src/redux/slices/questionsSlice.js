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
    setRightAnswers: (state, action) => {
      let currEl = state.rightAnswers.find(el => action.payload.testId === el.testId);
      if (currEl) {
        currEl.correct = action.payload.correct
        currEl.countOfQuestions = action.payload.countOfQuestions
      } else {
        state.rightAnswers.push(action.payload)
      }
    },
  },
})

export const { setTestId, setRightAnswers } = questionsSlice.actions
export default questionsSlice.reducer