import { createContext } from 'react'

export const TodoContext = createContext<{
  todoData: any
  setTodoData: any
  getTodo: any
}>({
  todoData: [],
  setTodoData: () => {
    return
  },
  getTodo: async () => {
    return
  },
})
