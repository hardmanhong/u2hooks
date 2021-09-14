import useRequest from '@ahooksjs/use-request'
import { useCallback } from 'react'
import _get from 'lodash/get'

const ALIAS = {
  list: 'list',
  total: 'total',
  current: 'current',
  pageSize: 'pageSize'
}

type OptionsType = {
  defaultPageSize?: number
  alias?: {
    list: string
    total: string
    current: string
    pageSize: string
  }
}

export default function usePaginated(
  service: any,
  options: OptionsType = {
    alias: {
      list: 'list',
      total: 'total',
      current: 'current',
      pageSize: 'pageSize'
    }
  }
) {
  const result = useRequest(
    ({ current, pageSize, ...params }) =>
      service({
        [_get(options.alias, 'current', ALIAS.current)]: current,
        [_get(options.alias, 'pageSize', ALIAS.pageSize)]: pageSize,
        ...params
      }),
    {
      ...options,
      paginated: true,
      formatResult: (res) => ({
        list: _get(res, _get(options.alias, 'list', ALIAS.list), []),
        total: _get(res, _get(options.alias, 'total', ALIAS.total), 0)
      })
    }
  )
  const onSearch = useCallback(
    (values) => {
      result.run({
        ...result.params?.[0],
        current: 1,
        pageSize: options.defaultPageSize || 10,
        ...values
      })
    },
    [result.params]
  )
  return {
    ...result,
    onSearch
  }
}
