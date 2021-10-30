import { useState, useCallback } from 'react';
var useForceUpdate = function () {
    var _a = useState(), updateState = _a[1];
    var forceUpdate = useCallback(function () { return updateState({}); }, []);
    return forceUpdate;
};
export default useForceUpdate;
