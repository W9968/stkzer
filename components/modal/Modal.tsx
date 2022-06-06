import { Button } from 'components/export'
import { FC, ReactElement } from 'react'
import { BiX } from 'react-icons/bi'
import {
  Buttons,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Overlay,
} from 'styles/modal.module'

const Modal: FC<prop & Record<string, any>> = ({
  title,
  children,
  open = true,
  onOpen,
  ...rest
}) => {
  return (
    <Overlay exit={{ opacity: 0 }}>
      <ModalContainer
        initial={{ y: '-10%' }}
        animate={{ y: 0 }}
        exit={{ opacity: 0 }}>
        <ModalHeader>
          <p>{title}</p>
          <BiX size={24} onClick={() => onOpen(!open)} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Buttons>
            <Button title={'close'} onClick={() => onOpen(!open)} />
            <Button title={'confirm'} {...rest} />
          </Buttons>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal

type prop = {
  title: string
  open: boolean
  children: ReactElement
  onOpen(bar: boolean): void
}
