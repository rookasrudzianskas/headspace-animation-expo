"use strict";
exports.__esModule = true;
exports.Headspace = void 0;
// @ts-nocheck
var react_native_skia_1 = require("@shopify/react-native-skia");
var react_1 = require("react");
var react_native_1 = require("react-native");
var simplex_noise_1 = require("simplex-noise");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var alea_1 = require("alea");
var Play2_1 = require("./Play2");
var Background_1 = require("./Background");
var Overlay_1 = require("./Overlay");
var useContextBridge_1 = require("./useContextBridge");
var C = 0.55228474983079;
var F = 0.0002;
var A = 0.2;
var n1 = simplex_noise_1.createNoise2D(new alea_1["default"]("1"));
var n2 = simplex_noise_1.createNoise2D(new alea_1["default"]("2"));
var n3 = simplex_noise_1.createNoise2D(new alea_1["default"]("3"));
var n4 = simplex_noise_1.createNoise2D(new alea_1["default"]("4"));
var _a = react_native_1.Dimensions.get("window"), width = _a.width, height = _a.height;
var c = react_native_skia_1.vec(width / 2, height / 2);
var r = 50;
var Headspace = function () {
    var clock = react_native_skia_1.useClockValue();
    var progress = react_native_skia_1.useValueEffect(0);
    var ContextBridge = useContextBridge_1.useContextBridge(react_native_safe_area_context_1.SafeAreaInsetsContext);
    var _a = react_1.useState(false), toggled = _a[0], setToggled = _a[1];
    var onTouch = react_native_skia_1.useTouchHandler({
        onEnd: function () {
            setToggled(function (t) { return !t; });
        },
    });
    react_1.useEffect(function () {
        react_native_skia_1.runTiming(progress, { to: toggled ? 1 : 0 }, { duration: 450, easing: react_native_skia_1.Easing.inOut(react_native_skia_1.Easing.ease) });
        if (toggled) {
            clock.start();
        }
        else {
            clock.stop();
        }
    }, [clock, toggled]);
    var path = react_native_skia_1.useComputedValue(function () {
        var p = react_native_skia_1.Skia.Path.Make();
        p.moveTo(c.x, c.y - r);
        p.cubicTo(c.x + r * C, c.y - r, c.x + r, c.y - r * C, c.x + r, c.y);
        p.cubicTo(c.x + r, c.y + r * C, c.x + r * C, c.y + r, c.x, c.y + r);
        p.cubicTo(c.x - r * C, c.y + r, c.x - r, c.y + r * C, c.x - r, c.y);
        p.cubicTo(c.x - r, c.y - r * C, c.x - r * C, c.y - r, c.x, c.y - r);
        return p;
    }, [clock]);
    return (react_1["default"].createElement(react_native_skia_1.Canvas, { style: { flex: 1 }, onTouch: onTouch },
        react_1["default"].createElement(ContextBridge, null,
            react_1["default"].createElement(Background_1.Background, { clock: clock }),
            react_1["default"].createElement(react_native_skia_1.Path, { path: path, color: "#3B3A3A" }),
            react_1["default"].createElement(Play2_1.Play, { c: c, r: r, progress: progress }),
            react_1["default"].createElement(Overlay_1.Overlay, null))));
};
exports.Headspace = Headspace;
