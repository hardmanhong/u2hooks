"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var react_2 = require("react");
var UModal_1 = (0, tslib_1.__importDefault)(require("./UModal"));
var ModalTest = function (props) {
    var payload = UModal_1.default.useVisible(ModalTest, {});
    (0, react_2.useEffect)(function () {
        console.log('useEffect', payload);
    }, [payload]);
    return react_1.default.createElement(UModal_1.default, (0, tslib_1.__assign)({}, props), payload.data);
};
exports.default = ModalTest;
