import { FC, ReactElement } from 'react'
import { StyledButton } from 'theme/button.element'

const Button: FC<ComponentProp> = function ({
  title,
  icon,
  textTransform = 'CAP',
}) {
  return (
    <StyledButton transform={textTransform}>
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
