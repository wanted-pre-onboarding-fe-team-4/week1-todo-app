import { useContext } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'

export const TodoPage = () => {
  const { getTodo } = useContext(TodoContext)

  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  // const { query: updateTodo } = useQuery({
  //   method: 'put',
  //   url: `/todos/${id}`,
  // })

  // const onClickUpdateTodo = async (todo: string, isComplted: boolean) => {
  //   await updateTodo({ todo, isComplted })
  //   await getTodo()
  // }

  // const { query: deleteTodo } = useQuery({
  //   method: 'delete',
  //   url: `/todos/${id}`,
  // })

  // const onClickDeleteToDo = async () => {
  //   await deleteTodo()
  //   await getTodo()
  // }

  const handleSubmit = async () => {
    await createTodo({ todo: '투두리스트 샘플1' })
    await getTodo()
  }

  return (
    <>
      <button onClick={handleSubmit}>추가하기</button>
    </>
  )
}
