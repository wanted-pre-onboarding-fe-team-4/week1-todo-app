import styled from 'styled-components'
import { colors } from '../styles/colors'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  type?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  backgroundColor?: string
  width?: number
  height?: number | string
  fontSize?: number | string
  testId?: string
}

/**
 * 공통인풋
 *
 * 기타 인풋 속성 넣을 수 있습니다.
 * @param type - input type (기본값 text)
 * @param onChange - onChange 함수 (required)
 * @param placeholder - placeholder
 * @param backgroundColor - 인풋 배경색 (기본값 white)
 * @param width - 인풋 px 넓이 (기본값 100%)
 * @param height - 인풋 px 높이 (기본값 100%)
 * @param fontSize - 폰트 크기 (기본값 16px)
 * @param testId - data-testid 값
 */

export const CommonInput = (props: InputProps) => {
  return (
    <InputWrap
      {...props}
      type={props.type || 'text'}
      backgroundColor={props.backgroundColor}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      onChange={props.onChange}
      placeholder={props.placeholder}
      data-testid={props.testId}
    />
  )
}

const InputWrap = styled.input<{
  width?: number
  height?: number | string
  fontSize?: number | string
  backgroundColor?: string
}>`
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: ${(props) => (props.height ? props.height + 'px' : '100%')};
  border: 1px solid ${colors.lightGray};
  border-radius: 0.5rem;
  padding: 0.7rem 0.8rem;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};

  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: normal;
`
