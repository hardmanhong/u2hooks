"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useForceUpdate = function () {
    var _a = (0, react_1.useState)(), updateState = _a[1];
    var forceUpdate = (0, react_1.useCallback)(function () { return updateState({}); }, []);
    return forceUpdate;
};
exports.default = useForceUpdate;
