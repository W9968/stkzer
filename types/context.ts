import { category } from './data'

export interface initialContext {
  categories: category[]
  fetchFromPool: () => void
  deleteFromPool: (query: string, id: number) => void
}

export const initialStore: initialContext = {
  categories: [],
  fetchFromPool: () => {},
  deleteFromPool: () => {},
}
