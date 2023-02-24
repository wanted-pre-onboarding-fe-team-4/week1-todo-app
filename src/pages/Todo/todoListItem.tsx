import { CommonButton } from 'components/commons/buttons/CommonButton'
import { CommonInput } from 'components/commons/inputs/CommonInput'
import { colors } from 'components/commons/styles/colors'
import { TodoContext } from 'context/TodoContext'
import { useQuery } from 'hooks/useQuery'
import { ComponentProps, useContext, useState } from 'react'
import styled from 'styled-components'

interface TodoListItemProps {
  id: number
  todo: string
  isCompleted: boolean
}

type OnChangeHandler = ComponentProps<'input'>['onChange']

export const TodoListItem = ({ id, todo, isCompleted }: TodoListItemProps) => {
  const [isShowEdit, setIsShowEdit] = useState(false)
  const [editTodoTxt, setEditTodoTxt] = useState(todo)
  const { getTodo } = useContext(TodoContext)

  const { query: updateTodo } = useQuery({
    method: 'put',
    url: `/todos/${id}`,
  })

  const { query: deleteTodo } = useQuery({
    method: 'delete',
    url: `/todos/${id}`,
  })

  const onClickUpdateTodo = async (todo: string, isCompleted: boolean) => {
    await updateTodo({ todo, isCompleted })
    await getTodo()
  }

  const onClickDeleteToDo = async () => {
    await deleteTodo()
    await getTodo()
  }

  const handleCompletedChange: OnChangeHandler = async (e) => {
    const newValue = e.target.checked
    await updateTodo({ todo, isCompleted: newValue })
    await getTodo()
  }

  const onClickToggleEdit = () => {
    setIsShowEdit(!isShowEdit)
  }

  const handleEditTodoTxtChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setEditTodoTxt(newValue)
  }

  return (
    <>
      <ListItemWrap>
        <StyledCheckBox
          type={'checkbox'}
          checked={isCompleted}
          onChange={(e) => handleCompletedChange(e)}
        />
        {isShowEdit ? (
          <CommonInput
            data-testid='modify-input'
            onChange={handleEditTodoTxtChange}
            width={300}
            value={editTodoTxt}
          />
        ) : (
          <Todo style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
            {todo}
          </Todo>
        )}
        <ButtonArea>
          {isShowEdit ? (
            <>
              <CommonButton
                width={100}
                onClick={onClickToggleEdit}
                text={'취소'}
                disabled={false}
                backgroundColor={colors.red}
                data-testid='cancel-button'
              />
              <CommonButton
                width={100}
                onClick={() => {
                  onClickUpdateTodo(editTodoTxt, isCompleted)
                  onClickToggleEdit()
                }}
                text={'제출'}
                disabled={false}
                backgroundColor={colors.ligntMain}
                data-testid='submit-button'
              />
            </>
          ) : (
            <>
              <CommonButton
                width={100}
                onClick={onClickDeleteToDo}
                text={'삭제'}
                disabled={false}
                backgroundColor={colors.red}
                data-testid='delete-button'
              />
              <CommonButton
                width={100}
                onClick={() => onClickToggleEdit()}
                text={'수정'}
                disabled={false}
                backgroundColor={colors.ligntMain}
                data-testid='modify-button'
              />
            </>
          )}
        </ButtonArea>
      </ListItemWrap>
    </>
  )
}

const StyledCheckBox = styled.input``
const ListItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`

const Todo = styled.div`
  display: flex;
  align-items: center;
`

const ButtonArea = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
`
