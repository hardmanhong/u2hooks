"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var use_request_1 = (0, tslib_1.__importDefault)(require("@ahooksjs/use-request"));
var react_1 = require("react");
var get_1 = (0, tslib_1.__importDefault)(require("lodash/get"));
var ALIAS = {
    list: 'list',
    total: 'total',
    current: 'current',
    pageSize: 'pageSize'
};
function usePaginated(service, options) {
    if (options === void 0) { options = {
        alias: {
            list: 'list',
            total: 'total',
            current: 'current',
            pageSize: 'pageSize'
        }
    }; }
    var result = (0, use_request_1.default)(function (_a) {
        var _b;
        var current = _a.current, pageSize = _a.pageSize, params = (0, tslib_1.__rest)(_a, ["current", "pageSize"]);
        return service((0, tslib_1.__assign)((_b = {}, _b[(0, get_1.default)(options.alias, 'current', ALIAS.current)] = current, _b[(0, get_1.default)(options.alias, 'pageSize', ALIAS.pageSize)] = pageSize, _b), params));
    }, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, options), { paginated: true, formatResult: function (res) { return ({
            list: (0, get_1.default)(res, (0, get_1.default)(options.alias, 'list', ALIAS.list), []),
            total: (0, get_1.default)(res, (0, get_1.default)(options.alias, 'total', ALIAS.total), 0)
        }); } }));
    var onSearch = (0, react_1.useCallback)(function (values) {
        var _a;
        result.run((0, tslib_1.__assign)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, (_a = result.params) === null || _a === void 0 ? void 0 : _a[0]), { current: 1, pageSize: options.defaultPageSize || 10 }), values));
    }, [result.params]);
    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, result), { onSearch: onSearch });
}
exports.default = usePaginated;
