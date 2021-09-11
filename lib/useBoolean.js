"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useBoolean(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = (0, react_1.useState)(initialValue), state = _a[0], setState = _a[1];
    var toggle = function (nextValue) {
        if (typeof nextValue === 'boolean') {
            setState(nextValue);
        }
        else {
            setState(function (s) { return !s; });
        }
    };
    return [state, toggle];
}
exports.default = useBoolean;
