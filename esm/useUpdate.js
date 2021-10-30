import { useReducer } from 'react';
var useUpdate = function () { return useReducer(function (n) { return n + 1; }, 0)[1]; };
export default useUpdate;
