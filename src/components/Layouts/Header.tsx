import { colors } from 'components/commons/styles/colors'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  const handleLogout = () => {
    localStorage.removeItem('access_token')
    navigate('/signin')
  }

  return (
    <Wrap>
      <div>Wanted Todo</div>
      {token && <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>}
    </Wrap>
  )
}

const LogoutButton = styled.button`
  background: #fff;
  color: ${colors.main};
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  position: absolute;
  right: 100px;
  bottom: 10px;
  font-weight: bold;
  cursor: pointer;
`
const Wrap = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid ${colors.lighterGray};
  background-color: ${colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  font-size: 24px;
  font-weight: 600;
  color: ${colors.main};
`
