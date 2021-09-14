import { __assign, __rest } from "tslib";
import useRequest from '@ahooksjs/use-request';
import { useCallback } from 'react';
import _get from 'lodash/get';
var ALIAS = {
    list: 'list',
    total: 'total',
    current: 'current',
    pageSize: 'pageSize'
};
export default function usePaginated(service, options) {
    if (options === void 0) { options = {
        alias: {
            list: 'list',
            total: 'total',
            current: 'current',
            pageSize: 'pageSize'
        }
    }; }
    var result = useRequest(function (_a) {
        var _b;
        var current = _a.current, pageSize = _a.pageSize, params = __rest(_a, ["current", "pageSize"]);
        return service(__assign((_b = {}, _b[_get(options.alias, 'current', ALIAS.current)] = current, _b[_get(options.alias, 'pageSize', ALIAS.pageSize)] = pageSize, _b), params));
    }, __assign(__assign({}, options), { paginated: true, formatResult: function (res) { return ({
            list: _get(res, _get(options.alias, 'list', ALIAS.list), []),
            total: _get(res, _get(options.alias, 'total', ALIAS.total), 0)
        }); } }));
    var onSearch = useCallback(function (values) {
        var _a;
        result.run(__assign(__assign(__assign({}, (_a = result.params) === null || _a === void 0 ? void 0 : _a[0]), { current: 1, pageSize: options.defaultPageSize || 10 }), values));
    }, [result.params]);
    return __assign(__assign({}, result), { onSearch: onSearch });
}
