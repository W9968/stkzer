import { FC } from 'react'
import { StyledEditField, StyledTextField } from 'theme/input.element'

const Input: FC<ComponentProp & Record<string, any>> = function ({
  placeholder = 'type something...',
}) {
  return (
    <StyledTextField>
      <StyledEditField placeholder={placeholder} />
    </StyledTextField>
  )
}

type ComponentProp = {
  placeholder?: string
}

export default Input
