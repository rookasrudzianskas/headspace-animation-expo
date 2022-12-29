"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.useContextBridge = void 0;
var react_1 = require("react");
// useContextBridge() is taken from https://github.com/pmndrs/drei#usecontextbridge
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var useContextBridge = function () {
    var contexts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        contexts[_i] = arguments[_i];
    }
    var values = 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    contexts.map(function (context) { return react_1.useContext(context); });
    return react_1.useMemo(function () {
        return function (_a) {
            var children = _a.children;
            return contexts.reduceRight(function (acc, Context, i) { return (react_1["default"].createElement(Context.Provider, { value: values[i], children: acc })); }, children);
        };
    }, __spreadArray(__spreadArray([], contexts), values));
};
exports.useContextBridge = useContextBridge;
