import { FC } from 'react'
import {
  StyledEditField,
  StyledTextField,
  StyleLabelField,
} from 'theme/input.element'

const Input: FC<ComponentProp & Record<string, any>> = function ({
  placeholder = 'type something...',
  label,
  type,
  ...rest
}) {
  return (
    <div>
      {label && <StyleLabelField>{label}</StyleLabelField>}
      <StyledTextField>
        <StyledEditField type={type} placeholder={placeholder} {...rest} />
      </StyledTextField>
    </div>
  )
}

type ComponentProp = {
  type: string
  label?: string
  placeholder?: string
}

export default Input
