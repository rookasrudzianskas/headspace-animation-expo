"use strict";
exports.__esModule = true;
exports.Overlay = void 0;
var react_native_skia_1 = require("@shopify/react-native-skia");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var padding = 32;
var _a = react_native_1.Dimensions.get("window"), width = _a.width, height = _a.height;
var c = react_native_skia_1.vec(width / 2, height / 2);
var title = "Following the breath";
var boldTf = require("./assets/Roboto-Bold.ttf");
var regularTf = require("./assets/Roboto-Regular.ttf");
var Overlay = function () {
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    var titleFont = react_native_skia_1.useFont(boldTf, 32);
    var normalFont = react_native_skia_1.useFont(regularTf, 14);
    if (!titleFont || !normalFont) {
        return null;
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_skia_1.Group, null),
        react_1["default"].createElement(react_native_skia_1.Group, { transform: [
                { translateY: insets.top + padding },
                { translateX: padding },
            ] },
            react_1["default"].createElement(Info, null)),
        react_1["default"].createElement(react_native_skia_1.Group, { transform: [
                { translateY: insets.top + padding },
                { translateX: width - padding - 24 },
            ] },
            react_1["default"].createElement(Close, null)),
        react_1["default"].createElement(react_native_skia_1.Text, { font: titleFont, x: (width - titleFont.getTextWidth(title)) / 2, y: c.y - 150, color: "white", text: title }),
        react_1["default"].createElement(react_native_skia_1.Group, { transform: [{ translateY: height - 175 }, { translateX: padding }] },
            react_1["default"].createElement(AirPlay, null)),
        react_1["default"].createElement(react_native_skia_1.Group, { transform: [
                { translateY: height - 175 },
                { translateX: width - padding - 24 },
            ] },
            react_1["default"].createElement(Settings, null)),
        react_1["default"].createElement(react_native_skia_1.Group, { transform: [{ translateY: height - 125 }], strokeCap: "round" },
            react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(padding, 0), p2: react_native_skia_1.vec(width - padding, 0), color: "rgba(255, 255, 255, 0.5)", style: "stroke", strokeWidth: 2 }),
            react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(padding, 0), p2: react_native_skia_1.vec(200, 0), color: "white", style: "stroke", strokeWidth: 2 }),
            react_1["default"].createElement(react_native_skia_1.Circle, { c: react_native_skia_1.vec(200, 0), color: "white", r: 6 }),
            react_1["default"].createElement(react_native_skia_1.Text, { text: "0:25", font: normalFont, x: padding, y: 20, color: "white" }),
            react_1["default"].createElement(react_native_skia_1.Text, { text: "3:16", font: normalFont, x: width - padding - normalFont.getTextWidth("3:16"), y: 20, color: "white" }))));
};
exports.Overlay = Overlay;
var Polygon = function (_a) {
    var polygon = _a.polygon;
    var path = react_1.useMemo(function () {
        return polygon.reduce(function (current, point) {
            if (current.isEmpty()) {
                current.moveTo(point.x, point.y);
            }
            else {
                current.lineTo(point.x, point.y);
            }
            return current;
        }, react_native_skia_1.Skia.Path.Make());
    }, [polygon]);
    return react_1["default"].createElement(react_native_skia_1.Path, { path: path });
};
var Icon = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_native_skia_1.Group, { style: "stroke", strokeWidth: 2, strokeCap: "round", strokeJoin: "round", color: "white" }, children));
};
var Info = function () { return (react_1["default"].createElement(Icon, null,
    react_1["default"].createElement(react_native_skia_1.Circle, { c: react_native_skia_1.vec(12, 12), r: 10 }),
    react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(12, 16), p2: react_native_skia_1.vec(12, 12) }),
    react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(12, 8), p2: react_native_skia_1.vec(12, 8) }))); };
var Close = function () { return (react_1["default"].createElement(Icon, null,
    react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(18, 6), p2: react_native_skia_1.vec(6, 18) }),
    react_1["default"].createElement(react_native_skia_1.Line, { p1: react_native_skia_1.vec(6, 6), p2: react_native_skia_1.vec(18, 18) }))); };
var Settings = function () { return (react_1["default"].createElement(Icon, null,
    react_1["default"].createElement(react_native_skia_1.Circle, { c: react_native_skia_1.vec(12, 12), r: 3 }),
    react_1["default"].createElement(react_native_skia_1.Path, { path: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }))); };
var AirPlay = function () { return (react_1["default"].createElement(Icon, null,
    react_1["default"].createElement(react_native_skia_1.Path, { path: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }),
    react_1["default"].createElement(Polygon, { polygon: [react_native_skia_1.vec(12, 15), react_native_skia_1.vec(17, 21), react_native_skia_1.vec(7, 21), react_native_skia_1.vec(12, 15)] }))); };
