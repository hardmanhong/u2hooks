"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useToggleComWithPayload = function (Component, Wrapper, defaultPayload) {
    var _a = (0, react_1.useState)(defaultPayload), payload = _a[0], setPayload = _a[1];
    (0, react_1.useEffect)(function () {
        var initInstance = function () {
            var showCache = Component.show;
            var hideCache = Component.hide;
            var toggleCache = Component.toggle;
            Wrapper.show = function (payload) {
                if (payload === void 0) { payload = defaultPayload; }
                setPayload(payload);
                showCache();
            };
            Wrapper.hide = hideCache;
            Wrapper.toggle = toggleCache;
            return function () {
                Wrapper.show = function () { };
                Wrapper.hide = function () { };
                Wrapper.toggle = function () { };
            };
        };
        var destroy = initInstance();
        return function () {
            destroy();
        };
    }, []);
    return payload;
};
exports.default = useToggleComWithPayload;
