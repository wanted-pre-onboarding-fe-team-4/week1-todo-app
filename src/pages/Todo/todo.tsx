import { ComponentProps, useContext, useState } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'
import { CommonButton } from 'components/commons/buttons/CommonButton'
import { TodoInput } from './style'
import { TodoListItem } from './todoListItem'

type OnChangeHandler = ComponentProps<'input'>['onChange']
type OnKeyDownHandler = ComponentProps<'input'>['onKeyDown']

export const Todo = () => {
  const { todoData, getTodo } = useContext(TodoContext)
  const [todoText, setTodoText] = useState('')

  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  const handleSubmit = async () => {
    await createTodo({ todo: todoText })
    await getTodo()
  }

  const handleTodoChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setTodoText(newValue)
  }

  const handleEnter: OnKeyDownHandler = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      await createTodo({ todo: todoText })
      await getTodo()
    }
  }

  return (
    <>
      <TodoInput
        value={todoText}
        type='text'
        onChange={handleTodoChange}
        onKeyDown={handleEnter}
        data-testid='new-todo-input'
      />
      <CommonButton
        onClick={handleSubmit}
        text={'추가'}
        disabled={false}
        data-testid='new-todo-add-button'
      />
      {todoData.map((el) => {
        return (
          <TodoListItem
            key={el.id}
            id={el.id}
            todo={el.todo}
            isCompleted={el.isCompleted}
          />
        )
      })}
    </>
  )
}
