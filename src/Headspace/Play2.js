"use strict";
exports.__esModule = true;
exports.Play = void 0;
var react_native_skia_1 = require("@shopify/react-native-skia");
var react_1 = require("react");
var react_native_1 = require("react-native");
var getPointAtLength = function (length, from, to) {
    var angle = Math.atan2(to.y - from.y, to.x - from.x);
    var x = from.x + length * Math.cos(angle);
    var y = from.y + length * Math.sin(angle);
    return react_native_skia_1.vec(x, y);
};
var src = react_native_skia_1.Skia.XYWHRect(0, 0, 24, 24);
var pause = react_native_skia_1.Skia.Path.Make();
pause.addRect(react_native_skia_1.Skia.XYWHRect(0, 0, 8, 24));
pause.addRect(react_native_skia_1.Skia.XYWHRect(24 - 8, 0, 8, 24));
var t = react_native_skia_1.dist(react_native_skia_1.vec(0, 0), react_native_skia_1.vec(24, 12)) / 2;
var mid1 = getPointAtLength(t, react_native_skia_1.vec(0, 0), react_native_skia_1.vec(24, 12));
var mid2 = getPointAtLength(t, react_native_skia_1.vec(0, 24), react_native_skia_1.vec(24, 12));
var play = react_native_skia_1.Skia.Path.Make();
play.moveTo(0, 0);
play.lineTo(mid1.x, mid1.y);
play.lineTo(mid2.x, mid2.y);
play.lineTo(0, 24);
play.close();
play.moveTo(mid1.x, mid1.y);
play.lineTo(24, 12);
play.lineTo(24, 12);
play.lineTo(mid2.x, mid2.y);
play.close();
var _a = react_native_1.Dimensions.get("window"), width = _a.width, height = _a.height;
var c = react_native_skia_1.vec(width / 2, height / 2);
var r = 20;
var dst = react_native_skia_1.Skia.XYWHRect(c.x - r, c.y - r, r * 2, r * 2);
var m3 = react_native_skia_1.Skia.Matrix();
react_native_skia_1.processTransform(m3, react_native_skia_1.fitbox("contain", src, dst));
pause.transform(m3);
play.transform(m3);
var bounds = play.computeTightBounds();
var Play = function (_a) {
    var progress = _a.progress, r = _a.r;
    var paint = react_native_skia_1.usePaintRef();
    var path = react_native_skia_1.useComputedValue(function () {
        var p = pause.interpolate(play, progress.current);
        p.simplify();
        return p;
    }, [progress]);
    var sr = 0.8 * r;
    return (<>
      <react_native_skia_1.Paint ref={paint}>
        <react_native_skia_1.Blur blur={10}/>
      </react_native_skia_1.Paint>
      <react_native_skia_1.Group transform={react_native_skia_1.fitbox("contain", bounds, react_native_skia_1.rect(c.x - sr, c.y - sr, sr * 2, sr * 2))} layer={paint}>
        <react_native_skia_1.Path path={path} color="white"/>
      </react_native_skia_1.Group>
    </>);
};
exports.Play = Play;
