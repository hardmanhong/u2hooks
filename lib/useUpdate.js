"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useUpdate = function () { return (0, react_1.useReducer)(function (n) { return n + 1; }, 0)[1]; };
exports.default = useUpdate;
