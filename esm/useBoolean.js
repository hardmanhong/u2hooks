import { useState } from 'react';
export default function useBoolean(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = useState(initialValue), state = _a[0], setState = _a[1];
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
