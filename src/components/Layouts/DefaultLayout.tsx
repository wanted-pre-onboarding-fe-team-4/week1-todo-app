import { colors } from 'components/commons/styles/colors'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header'

export const DefaultLayout = () => {
  return (
    <>
      <LayoutBG>
        <Header />
        <LayoutWrap>
          <InnerWrap>
            <Outlet />
          </InnerWrap>
        </LayoutWrap>
      </LayoutBG>
    </>
  )
}

const LayoutBG = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.bg};
`
const LayoutWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`

const InnerWrap = styled.div`
  width: 700px;
  padding: 20px;
  background-color: ${colors.white};
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;
  border-radius: 0.5rem;
  display: flex;
`
