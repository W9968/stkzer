import { FC } from 'react'
import { InputContainer, StyledInput, StyledLabel } from 'styles/input.module'

const FieldEdit: FC<prop & Record<string, any>> = ({
  label,
  type,
  placeholer = 'type something...',
  ...rest
}) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholer}
        autoComplete={'no'}
        {...rest}
      />
    </InputContainer>
  )
}

export default FieldEdit

type prop = {
  type: string
  label?: string
  placeholer: string
}
