import { category } from './data'

export interface initialContext {
  categories: category[]
  fetchFromPool: () => void
  insertIntoPool: (query: string, data: string) => void
  deleteFromPool: (query: string, id: number) => void
}

export const initialStore: initialContext = {
  categories: [],
  fetchFromPool: () => {},
  insertIntoPool: () => {},
  deleteFromPool: () => {},
}
