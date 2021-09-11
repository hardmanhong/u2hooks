import { useEffect } from 'react';
import useToggle from './useBoolean';
var useToggleCom = function (_a) {
    var Component = _a.Component, onOk = _a.onOk, onCancel = _a.onCancel;
    var _b = useToggle(), visible = _b[0], toggle = _b[1];
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
    useEffect(function () {
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
export default useToggleCom;
