"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
require("antd/dist/antd.css");
var antd_1 = require("antd");
var ModalTest_1 = (0, tslib_1.__importDefault)(require("./ModalTest"));
var App = function () {
    var onShow = function () {
        ModalTest_1.default.show({ data: 'App' });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ModalTest_1.default, null),
        react_1.default.createElement(antd_1.Button, { onClick: onShow }, "show")));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
