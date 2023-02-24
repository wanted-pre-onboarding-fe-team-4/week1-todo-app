import React, { useEffect, useState } from 'react'
import { useQuery } from 'hooks/useQuery'
import { TodoContext } from 'context/TodoContext'
import { Todo } from './todo'
import { Wrapper } from './style'
// import { ITodo } from '../../types/ITodo'

export const TodoPage = () => {
  const [todoData, setTodoData] = useState<any>([])

  //todo 불러오기
  const { query: getTodo, data } = useQuery({
    url: `/todos`,
    method: 'get',
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
      <Wrapper>
        <Todo />
      </Wrapper>
    </TodoContext.Provider>
  )
}
