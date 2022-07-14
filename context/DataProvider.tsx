import { useEffect } from 'react'
import { __auth } from './AuthProvider'
import { __supabase } from 'hooks/useSupa'
import { createContext, useContext, useState, ReactElement } from 'react'

type ContexProp = {
  children: ReactElement
}

type MessageDialog = {
  type: string
  content: string
}

type List = {
  id?: number
  user_id: string
  list_type: string
  created_at: Date
}

type StoreContext = {
  lists: List[]
  message: MessageDialog
  addLists: (l: List) => void
  deleteData: (type: string, id: number) => void
}

const initialStoreValue: StoreContext = {
  lists: [],
  message: {
    type: '',
    content: '',
  },
  addLists: () => {},
  deleteData: () => {},
}

const DataContext = createContext<StoreContext>(initialStoreValue)
export const __data = () => useContext(DataContext)

export default function DataProvider({ children }: ContexProp) {
  const { isLoggedIn, currentUser } = __auth()
  const [message, setMessage] = useState<MessageDialog>(
    initialStoreValue.message
  )
  const [lists, setLists] = useState<List[]>(initialStoreValue.lists)

  const getLists = async () => {
    const { data, error } = await __supabase
      .from('table_list_type')
      .select()
      .match({
        user_id: currentUser.user_id,
      })
      .order('created_at', { ascending: false })

    if (!error) {
      setLists([...data])
    }
  }

  const addLists = async (l: List) => {
    const { data, error } = await __supabase
      .from('table_list_type')
      .insert([{ ...l }])

    if (!error) {
      setMessage({
        type: 'success',
        content: 'collection added',
      })
      setLists([...data, ...lists])
    } else {
      setMessage({
        type: 'error',
        content: 'can not add a new collection',
      })
    }
  }

  const deleteData = async (type: string, id: number) => {
    const { error } = await __supabase.from(type).delete().match({
      id: id,
    })

    if (!error) {
      switch (type) {
        case 'table_list_type':
          setLists([...lists.filter((el) => el.id !== id)])
          break
      }
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      getLists()
    }
  }, [isLoggedIn]) // eslint-disable-line

  return (
    <DataContext.Provider value={{ lists, message, addLists, deleteData }}>
      {children}
    </DataContext.Provider>
  )
}
