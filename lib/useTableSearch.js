"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var use_request_1 = (0, tslib_1.__importDefault)(require("@ahooksjs/use-request"));
var react_1 = require("react");
function useTableSearch(service, options) {
    var result = (0, use_request_1.default)(service, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, options), { paginated: true }));
    var onSearch = (0, react_1.useCallback)(function (values) {
        result.run((0, tslib_1.__assign)({ current: 1, pageSize: options.defaultPageSize || 10 }, values));
    }, []);
    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, result), { onSearch: onSearch });
}
exports.default = useTableSearch;
