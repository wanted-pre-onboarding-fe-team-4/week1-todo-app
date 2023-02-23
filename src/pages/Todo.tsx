import { useContext } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'
import { CommonButton } from 'components/commons/buttons/CommonButton'

export const TodoPage = () => {
  const { getTodo } = useContext(TodoContext)

  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  const { query: updateTodo } = useQuery({
    method: 'put',
    url: `/todos/1`,
  })

  const onClickUpdateTodo = async (todo: string, isCompleted: boolean) => {
    await updateTodo({ todo, isCompleted })
    await getTodo()
  }

  const { query: deleteTodo } = useQuery({
    method: 'delete',
    url: `/todos/1`,
  })

  const onClickDeleteToDo = async () => {
    await deleteTodo()
    await getTodo()
  }

  const handleSubmit = async () => {
    await createTodo({ todo: '투두리스트 샘플1' })
    await getTodo()
  }

  return (
    <>
      <CommonButton
        onClick={handleSubmit}
        text={'추가하기(테스트)'}
        disabled={false}
      />
      <CommonButton
        onClick={onClickDeleteToDo}
        text={'1번 삭제하기'}
        disabled={false}
      />
      <CommonButton
        onClick={() => onClickUpdateTodo('바꾸기', true)}
        text={'1번 테스트로 바꾸기'}
        disabled={false}
      />
    </>
  )
}
