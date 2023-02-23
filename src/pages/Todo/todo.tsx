import { ComponentProps, useContext, useState } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'
import { CommonButton } from 'components/commons/buttons/CommonButton'
import { TodoInput } from './style'

type OnChangeHandler = ComponentProps<'input'>['onChange']

export const Todo = () => {
  const { todoData, getTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');
  
  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  const { query: updateTodo } = useQuery({
    method: 'put',
    url: `/todos/1`,
  })

  const { query: deleteTodo } = useQuery({
    method: 'delete',
    url: `/todos/1`,
  })

  const handleSubmit = async () => {
    await createTodo({ todo: todoText })
    await getTodo()
  }

  const onClickUpdateTodo = async (todo: string, isCompleted: boolean) => {
    await updateTodo({ todo, isCompleted })
    await getTodo()
  }

  const onClickDeleteToDo = async () => {
    await deleteTodo()
    await getTodo()
  }

  const handleTodoChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setTodoText(newValue)
  }

  return (
    <>
      <TodoInput 
        value={todoText}
        type='text'
        onChange={handleTodoChange}
      />
      <CommonButton
        onClick={handleSubmit}
        text={'추가'}
        disabled={false}
      />
    {
      todoData.map((a, i) => {
        return (
          <div 
            key={i}
            style={{
              display: 'flex',
              width: '300px'
            }}
          >
            {a.todo}
            <div
              style={{
                display: 'flex',
                width: '300px'
              }}
            >
              <CommonButton
                onClick={onClickDeleteToDo}
                text={'삭제'}
                disabled={false}
              />
              <CommonButton
                onClick={() => onClickUpdateTodo('바꾸기', true)}
                text={'수정'}
                disabled={false}
              />
            </div>
          </div>
        )
      })
    }
    </>
  )
}
