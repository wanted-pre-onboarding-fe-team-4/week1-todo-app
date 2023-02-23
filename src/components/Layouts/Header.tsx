import { colors } from 'components/commons/styles/colors'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrap>
      <div>Wanted Todo</div>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid ${colors.lighterGray};
  background-color: ${colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 600;
  color: ${colors.main};
`
