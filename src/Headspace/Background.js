"use strict";
exports.__esModule = true;
exports.Background = void 0;
var react_native_skia_1 = require("@shopify/react-native-skia");
var react_1 = require("react");
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get("window"), width = _a.width, height = _a.height;
var c = react_native_skia_1.vec(width / 2, height / 2);
var c1 = "#2ab8aa";
var c2 = "#3a9dbb";
var c3 = "#2a7fb8";
var easing = react_native_skia_1.Easing.bezier(0.37, 0, 0.63, 1);
var getProgress = function (t, durationInFrames) {
    if (durationInFrames === void 0) { durationInFrames = 4000; }
    var p = (t % durationInFrames) / durationInFrames;
    var currentIteration = Math.floor(t / durationInFrames);
    var isGoingBack = currentIteration % 2 === 0;
    var progress = isGoingBack ? 1 - p : p;
    return progress;
};
var getCurve = function (start, h) {
    var path = react_native_skia_1.Skia.Path.Make();
    path.moveTo(0, start);
    path.quadTo(width / 2, start - h, width, start);
    path.lineTo(width, height);
    path.lineTo(0, height);
    path.close();
    return path;
};
var Background = function (_a) {
    var clock = _a.clock;
    // getCurve(200, 50);
    var p1 = react_native_skia_1.useComputedValue(function () {
        var progress = getProgress(clock.current, 4100);
        return getCurve(react_native_skia_1.mix(easing(progress), c.y - 300, 200), react_native_skia_1.mix(easing(progress), 50, 60));
    }, [clock]);
    var p2 = react_native_skia_1.useComputedValue(function () {
        var progress = getProgress(clock.current);
        return getCurve(react_native_skia_1.mix(easing(progress), c.y - 150, c.y), react_native_skia_1.mix(easing(progress), 40, 60));
    }, [clock]);
    var p3 = react_native_skia_1.useComputedValue(function () {
        var progress = getProgress(clock.current, 3800);
        return getCurve(react_native_skia_1.mix(easing(progress), c.y + 75, c.y + 225), react_native_skia_1.mix(easing(progress), 30, 50));
    }, [clock]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_skia_1.Fill, { color: "#60d1b9" }),
        react_1["default"].createElement(react_native_skia_1.Path, { path: p1, color: c1 }),
        react_1["default"].createElement(react_native_skia_1.Path, { path: p2, color: c2 }),
        react_1["default"].createElement(react_native_skia_1.Path, { path: p3, color: c3 })));
};
exports.Background = Background;
