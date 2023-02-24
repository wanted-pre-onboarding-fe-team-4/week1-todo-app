import { ComponentProps, useContext, useState } from 'react'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'
import { CommonButton } from 'components/commons/buttons/CommonButton'
import { TodoInput, TodoListArea } from './style'
import { TodoListItem } from './todoListItem'
import { useLoggedIn } from 'hooks/useLoggedIn'

type OnChangeHandler = ComponentProps<'input'>['onChange']
type OnKeyDownHandler = ComponentProps<'input'>['onKeyDown']

export const Todo = () => {
  useLoggedIn()

  const { todoData, getTodo } = useContext(TodoContext)
  const [todoText, setTodoText] = useState('')

  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
  })

  const handleSubmit = async () => {
    await createTodo({ todo: todoText })
    await getTodo()
    setTodoText('')
  }

  const handleTodoChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setTodoText(newValue)
  }

  const handleEnter: OnKeyDownHandler = async (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      await createTodo({ todo: todoText })
      await getTodo()
      setTodoText('')
    }
  }

  return (
    <>
      <TodoInput
        value={todoText}
        type='text'
        onChange={handleTodoChange}
        onKeyDown={handleEnter}
        placeholder="todo를 입력해주세요"
        data-testid='new-todo-input'
      />
      <CommonButton
        onClick={handleSubmit}
        text={'추가'}
        disabled={false}
        height={50}
        data-testid='new-todo-add-button'
      />
      <TodoListArea>
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
</TodoListArea>

    </>
  )
}
