import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactElement, useEffect, useState } from 'react'

import {
  StyledDropDownButton,
  StyledDropDownButtonClickable,
  StyledDropDownContent,
} from 'theme/button.element'

import { __supabase } from 'hooks/useSupa'
import { __auth } from 'context/AuthProvider'
import { MdKeyboardArrowUp, MdAddCircleOutline } from 'react-icons/md'
import { __data } from 'context/DataProvider'
import Link from 'next/link'

const DropDown: FC<ComponentProp> = function ({ title, icon }) {
  const { lists } = __data()
  const { pathname, push } = useRouter()
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    pathname.includes('/list') && setOpen(true)
  }, [pathname])

  return (
    <StyledDropDownButton>
      <StyledDropDownButtonClickable onClick={() => setOpen(!isOpen)}>
        {icon}
        <p>{title}</p>

        {lists.length !== 0 && (
          <div
            style={{
              width: 21,
              height: 21,
              fontSize: 14,
              display: 'flex',
              borderRadius: 4,
              marginLeft: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FF3B3B',
            }}>
            {lists.length}
          </div>
        )}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'keyframes' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: lists.length > 0 ? 0 : 'auto',
            justifyContent: 'center',
          }}>
          <MdKeyboardArrowUp size={21} />
        </motion.div>
      </StyledDropDownButtonClickable>
      <AnimatePresence>
        {isOpen && (
          <StyledDropDownContent
            initial={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            exit={'closed'}
            variants={animation}>
            <motion.button
              variants={children}
              onClick={() => push('/profile/collection')}>
              <MdAddCircleOutline
                size={21}
                color={pathname.includes('/collection') ? '#d3f56b' : '#d4d4d8'}
              />
              <p>add list</p>
            </motion.button>
            {lists.map((el: List) => {
              return (
                <Link
                  key={el.id}
                  href={`/profile/collection/${el.list_type}`}
                  passHref>
                  <motion.button variants={children}>
                    {el.list_type}
                  </motion.button>
                </Link>
              )
            })}
          </StyledDropDownContent>
        )}
      </AnimatePresence>
    </StyledDropDownButton>
  )
}

type ComponentProp = {
  title: string
  icon: ReactElement
}

type List = {
  id?: number
  user_id: string
  list_type: string
  created_at: Date
}

const animation = {
  open: {
    height: 'fit-content',
    transition: {
      type: 'tween',
      staggerChildren: 0.1,
    },
  },
  closed: {
    height: 0,
    transition: {
      type: 'just',
      staggerChildren: 0.1,
      when: 'afterChildren',
      staggerDirection: -1,
    },
  },
}

const children = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export default DropDown
