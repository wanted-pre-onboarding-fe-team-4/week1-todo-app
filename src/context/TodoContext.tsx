import { createContext, Dispatch, SetStateAction } from 'react'
import { ITodo } from 'types/ITodo'

export const TodoContext = createContext<{
  todoData: ITodo[]
  setTodoData: Dispatch<SetStateAction<ITodo[]>>
  getTodo: () => Promise<void>
}>({
  todoData: [],
  setTodoData: () => {
    return
  },
  getTodo: async () => {
    return
  },
})
