import styled from 'styled-components'
import { colors } from '../styles/colors'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  disabled: boolean
  onClick: () => void
  backgroundColor?: string
  width?: number
  height?: number
}

/**
 * 공통버튼
 *
 * 기타 버튼 속성 넣을 수 있습니다.
 * @param text - 버튼 안 텍스트 (required)
 * @param disabled - 버튼 비활성화 여부 (required)
 * @param onClick - onClick 함수 (required)
 * @param backgroundColor - 기본 값은 gray 입니다.
 * @param width - 버튼 px 넓이 (기본값 100%)
 * @param height - 버튼 px 높이 (기본값 100%)
 */

export const CommonButton = (props: ButtonProps) => {
  return (
    <ButtonWrap
      onClick={props.onClick}
      backgroundColor={props.backgroundColor}
      width={props.width}
      height={props.height}
      disabled={props.disabled}
    >
      {props.text}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.button<{
  width?: number
  height?: number
  backgroundColor?: string
}>`
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: ${(props) => (props.height ? props.height + 'px' : '100%')};
  outline: 0;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.gray};
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 0.8rem;

  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};

  cursor: pointer;
  transition: 0.2s;

  :disabled {
    background-color: ${colors.lightGray};
  }
  :hover {
    background-color: ${colors.lightGray};
  }
`
