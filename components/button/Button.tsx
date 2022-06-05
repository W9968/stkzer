import { FC } from 'react'
import { Clickable } from 'styles/button.module'

const Button: FC<prop & Record<string, any>> = ({
  title,
  status = false,
  ...rest
}) => {
  return (
    <Clickable disabled={status} {...rest}>
      {title}
    </Clickable>
  )
}

export default Button

type prop = {
  title: string
  status?: boolean
}
