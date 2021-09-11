"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var antd_1 = require("antd");
var up_use_1 = require("up-use");
var UModal = function (_a) {
    var children = _a.children, onOk = _a.onOk, onCancel = _a.onCancel, props = (0, tslib_1.__rest)(_a, ["children", "onOk", "onCancel"]);
    var _b = (0, up_use_1.useToggleCom)({
        Component: UModal,
        onOk: onOk,
        onCancel: onCancel
    }), visible = _b[0], _c = _b[1], handleOk = _c.handleOk, onShow = _c.onShow, onHide = _c.onHide;
    console.log('handleOk', handleOk);
    return (react_1.default.createElement(antd_1.Modal, (0, tslib_1.__assign)({}, props, { visible: visible, onOk: onShow, onCancel: onHide }), children));
};
var useVisible = function (Component, defaultPayload) {
    return (0, up_use_1.useToggleComWithPayload)(UModal, Component, defaultPayload);
};
UModal.useVisible = useVisible;
exports.default = UModal;
