import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === payload.id)
      if (!game) {
        state.items.push(payload)
      } else {
        alert('O jogo já esta no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions

export default cartSlice.reducer
