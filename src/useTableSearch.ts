import useRequest from '@ahooksjs/use-request'
import { useCallback } from 'react'

type optionsType = {
  defaultPageSize: number
}

export default function useTableSearch<T>(
  service: () => Promise<T>,
  options: optionsType
) {
  const result = useRequest(service, { ...options, paginated: true })
  const onSearch = useCallback((values) => {
    result.run({
      current: 1,
      pageSize: options.defaultPageSize || 10,
      ...values
    })
  }, [])
  return {
    ...result,
    onSearch
  }
}
