import { __assign } from "tslib";
import useRequest from '@ahooksjs/use-request';
import { useCallback } from 'react';
export default function useTableSearch(service, options) {
    var result = useRequest(service, __assign(__assign({}, options), { paginated: true }));
    var onSearch = useCallback(function (values) {
        result.run(__assign({ current: 1, pageSize: options.defaultPageSize || 10 }, values));
    }, []);
    return __assign(__assign({}, result), { onSearch: onSearch });
}
