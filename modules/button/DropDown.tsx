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

const DropDown: FC<ComponentProp> = function ({ title, icon }) {
  const { currentUser } = __auth()
  const { pathname, push } = useRouter()
  const [isOpen, setOpen] = useState<boolean>(false)
  const [isCount, setCount] = useState<number>(0)
  const [isListFetched, setFetchedList] = useState<ListFetchedSupa[]>([])

  const fetchListsOnUserDemand = async () => {
    const { data, error } = await __supabase
      .from('table_list_type')
      .select()
      .match({
        user_id: currentUser.user_id,
      })
      .order('created_at', { ascending: false })
    if (!error) {
      setFetchedList(data)
      setCount(data.length)
    }
  }

  useEffect(() => {
    fetchListsOnUserDemand()
  }, []) // eslint-disable-line

  useEffect(() => {
    pathname.includes('/list') && setOpen(true)
  }, [pathname])

  return (
    <StyledDropDownButton>
      <StyledDropDownButtonClickable onClick={() => setOpen(!isOpen)}>
        {icon}
        <p>{title}</p>

        {isCount !== 0 && (
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
            {isCount}
          </div>
        )}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'keyframes' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: isCount > 0 ? 0 : 'auto',
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
              onClick={() => push('/profile/list')}>
              <MdAddCircleOutline
                size={21}
                color={pathname.includes('/list') ? '#d3f56b' : '#d4d4d8'}
              />
              <p>add list</p>
            </motion.button>
            {isListFetched.map((el: ListFetchedSupa) => {
              return (
                <motion.button key={el.id} variants={children}>
                  {el.list_type}
                </motion.button>
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

type ListFetchedSupa = {
  id: number
  user_id: string
  list_type: string
  created_at: string
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
