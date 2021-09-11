"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useBoolean_1 = (0, tslib_1.__importDefault)(require("./useBoolean"));
var useToggleCom = function (_a) {
    var Component = _a.Component, onOk = _a.onOk, onCancel = _a.onCancel;
    var _b = (0, useBoolean_1.default)(), visible = _b[0], toggle = _b[1];
    var onShow = function () {
        if (typeof onOk === 'function') {
            onOk();
        }
        else {
            toggle(true);
        }
    };
    var onHide = function () {
        if (typeof onCancel === 'function') {
            onCancel();
        }
        else {
            toggle(false);
        }
    };
    (0, react_1.useEffect)(function () {
        var init = function () {
            Component.show = function () {
                toggle(true);
            };
            Component.hide = function () {
                toggle(false);
            };
            Component.toggle = toggle;
            return function () {
                Component.show = function () { };
                Component.hide = function () { };
                Component.toggle = function () { };
            };
        };
        var destroy = init();
        return function () {
            destroy();
        };
    }, []);
    return [visible, { onShow: onShow, onHide: onHide }];
};
exports.default = useToggleCom;
