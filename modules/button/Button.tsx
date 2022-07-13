import { FC, ReactElement } from 'react'
import { StyledButton, StyledButtonProps } from 'theme/button.element'

const Button: FC<ComponentProp & Record<string, any>> = function ({
  icon,
  title,
  color = '',
  background = '',
  transform = 'CAP',
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      transform={transform}
      background={background}
      {...rest}>
      <p>{title}</p>
      {icon}
    </StyledButton>
  )
}

type ComponentProp = StyledButtonProps & {
  title: string
  icon?: ReactElement
}

export default Button
