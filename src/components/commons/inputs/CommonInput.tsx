import styled from 'styled-components'
import { colors } from '../styles/colors'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  backgroundColor?: string
  width?: number
  height?: number
}

/**
 * 공통인풋
 *
 * 기타 인풋 속성 넣을 수 있습니다.
 * @param onChange - onChange 함수 (required)
 * @param placeholder - placeholder
 * @param backgroundColor - 인풋 배경색 (기본 값 white)
 * @param width - 인풋 px 넓이 (기본값 100%)
 * @param height - 인풀 px 높이 (기본값 100%)
 */

export const CommonInput = (props: InputProps) => {
  return (
    <InputWrap
      backgroundColor={props.backgroundColor}
      width={props.width}
      height={props.height}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}

const InputWrap = styled.input<{
  width?: number
  height?: number
  backgroundColor?: string
}>`
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: ${(props) => (props.height ? props.height + 'px' : '100%')};
  border: 1px solid ${colors.lightGray};
  border-radius: 0.5rem;
  padding: 0.7rem 0.8rem;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};

  font-size: 14px;
  font-weight: normal;
`
