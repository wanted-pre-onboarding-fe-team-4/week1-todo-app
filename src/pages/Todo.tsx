import { useContext } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'

export const TodoPage = () => {
  const { getTodo } = useContext(TodoContext)

  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  const handleSubmit = async () => {
    await createTodo({ todo: '투두리스트 샘플1' })
    // 데이터 새로불러오기
    await getTodo()
  }

  return (
    <>
      <button onClick={handleSubmit}>추가하기</button>
    </>
  )
}
