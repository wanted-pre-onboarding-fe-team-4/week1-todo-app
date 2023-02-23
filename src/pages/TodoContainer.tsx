import { useEffect, useState } from 'react'
import { useQuery } from 'hooks/useQuery'
import { TodoContext } from 'context/TodoContext'
import { TodoPage } from './Todo'

export const TodoContainer = () => {
  const [todoData, setTodoData] = useState<any>([])

  //todo 불러오기
  const { query: getTodo, data } = useQuery({
    method: 'get',
    url: `/todos`,
  })

  //처음에 todo 데이터 불러오기
  useEffect(() => {
    getTodo()
  }, [])

  //데이터 불러오기 성공하면 todoData에 담기
  useEffect(() => {
    if (data) {
      setTodoData(data)
    }
  }, [data])

  return (
    <TodoContext.Provider value={{ todoData, setTodoData, getTodo }}>
      <TodoPage />
    </TodoContext.Provider>
  )
}
