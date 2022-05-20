import { __s } from 'hooks/useSupa'
import { category } from 'types/data.d'
import { initialContext, initialStore } from 'types/context.d'
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

  async function fetchFromPool() {
    const { data } = await __s.from('category').select()
    data && setCategories(data)
  }

  useEffect(() => {
    fetchFromPool()
  }, []) // eslint-disable-line

  return (
    <DataContext.Provider value={{ categories }}>
      {children}
    </DataContext.Provider>
  )
}

export default _DataContext

type prop = {
  children: ReactElement
}

export { default as DataProvider } from './DataProvider'
