import { useReducer } from 'react'

const useUpdate = () => useReducer((n) => n + 1, 0)[1]
export default useUpdate
