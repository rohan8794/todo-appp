import { createSlice } from '@reduxjs/toolkit'

    type TodoState = {
      todos: {
        id: string
        text: string
        completed: boolean
        createdAt: Date
      }[]
    }

    const initialState: TodoState = {
      todos: [],
    }

    const todoSlice = createSlice({
      name: 'todo',
      initialState,
      reducers: {
        addTodo: (state, action) => {
          state.todos.push({
            id: Math.random().toString(36).substr(2, 9),
            text: action.payload,
            completed: false,
            createdAt: new Date(),
          })
        },
        toggleTodo: (state, action) => {
          state.todos = state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        },
        deleteTodo: (state, action) => {
          state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
      },
    })

    export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
    export default todoSlice.reducer
