import { FC, ReactElement } from 'react'
import { StyledButton } from 'theme/button.element'

const Button: FC<ComponentProp & Record<string, any>> = function ({
  title,
  icon,
  textTransform = 'CAP',
  ...rest
}) {
  return (
    <StyledButton transform={textTransform} {...rest}>
      <p>{title}</p>
      {icon}
    </StyledButton>
  )
}

type ComponentProp = {
  title: string
  icon?: ReactElement
  textTransform?: 'CAP' | 'UP'
}

export default Button
