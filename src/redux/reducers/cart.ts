import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Game>) => {
      state.items.push(payload)
    },
    remove: (state, { payload }: PayloadAction<Game>) => {
      state.items = state.items.filter((item) => item.id !== payload.id)
    }
  }
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer
