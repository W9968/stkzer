import { supabase } from 'hooks/useSupa'
import { category, list } from 'types/data.d'
import { initialContext, initialStore } from 'types/context'
import {
  useState,
  createContext,
  useContext,
  FC,
  useEffect,
  ReactElement,
} from 'react'

const DataContext = createContext<initialContext>(initialStore)
export const __store = () => useContext(DataContext)

const _DataContext: FC<prop> = ({ children }) => {
  const [categories, setCategories] = useState<category[]>(
    initialStore.categories
  )
  const [lists, setLists] = useState<list[]>(initialStore.lists)

  async function fetchFromPool(query: string) {
    const { data } = await supabase.from(query).select()
    if (query === 'list') data && setLists(data)
    else if (query === 'category') data && setCategories(data)
  }

  async function insertIntoPool(query: string, request: string) {
    const { data } = await supabase.from(query).insert([{ name: request }])
    data && setCategories([...categories, ...data])
  }

  async function deleteFromPool(query: string, key: number) {
    await supabase.from(query).delete().match({ id: key })
    setCategories(categories.filter((el) => el.id !== key))
  }

  useEffect(() => {
    fetchFromPool('list')
  }, []) // eslint-disable-line

  return (
    <DataContext.Provider
      value={{
        lists,
        categories,
        fetchFromPool,
        insertIntoPool,
        deleteFromPool,
      }}>
      {children}
    </DataContext.Provider>
  )
}

export default _DataContext

type prop = {
  children: ReactElement
}

export { default as DataProvider } from './DataProvider'
