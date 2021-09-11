"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_router_dom_1 = require("react-router-dom");
var query_string_1 = (0, tslib_1.__importDefault)(require("query-string"));
function useQuery() {
    var location = (0, react_router_dom_1.useLocation)();
    return query_string_1.default.parse(location.search);
}
exports.default = useQuery;
