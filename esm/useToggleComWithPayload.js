import { useState, useEffect } from 'react';
var useToggleComWithPayload = function (Component, Wrapper, defaultPayload) {
    var _a = useState(defaultPayload), payload = _a[0], setPayload = _a[1];
    useEffect(function () {
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
export default useToggleComWithPayload;
