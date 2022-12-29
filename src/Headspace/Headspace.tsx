// @ts-nocheck
import {
  Path,
  Skia,
  useClockValue,
  useComputedValue,
  Canvas,
  vec,
  useTouchHandler,
  useTiming, useValueEffect, runTiming, Easing,
} from "@shopify/react-native-skia";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { createNoise2D } from "simplex-noise";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import alea from "alea";

import { Play } from "./Play2";
import { Background } from "./Background";
import { Overlay } from "./Overlay";
import { useContextBridge } from "./useContextBridge";

const C = 0.55228474983079;
const F = 0.0002;
const A = 0.2;

const n1 = createNoise2D(new alea("1"));
const n2 = createNoise2D(new alea("2"));
const n3 = createNoise2D(new alea("3"));
const n4 = createNoise2D(new alea("4"));

const { width, height } = Dimensions.get("window");
const c = vec(width / 2, height / 2);
const r = 50;

export const Headspace = () => {
  const clock = useClockValue();
  const progress = useValueEffect(0);
  const ContextBridge = useContextBridge(SafeAreaInsetsContext);
  const [toggled, setToggled] = useState(false);

  const onTouch = useTouchHandler({
    onEnd: () => {
      setToggled((t) => !t);
    },
  });

  useEffect(() => {
    runTiming(
      progress,
      { to: toggled ? 1 : 0 },
      { duration: 450, easing: Easing.inOut(Easing.ease)}
    );
    if (toggled) {
      clock.start();
    } else {
      clock.stop();
    }
  }, [clock, toggled]);

  const path = useComputedValue(() => {
    const p = Skia.Path.Make();
    p.moveTo(c.x, c.y - r);
    p.cubicTo(c.x + r * C, c.y - r, c.x + r, c.y -r * C, c.x + r, c.y);
    p.cubicTo(c.x + r, c.y + r * C, c.x + r * C, c.y + r, c.x, c.y + r);
    p.cubicTo(c.x - r * C, c.y + r, c.x - r, c.y + r * C, c.x - r, c.y);
    p.cubicTo(c.x - r, c.y - r * C, c.x - r * C, c.y - r, c.x, c.y - r);
    return p;
  }, [clock]);

  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <ContextBridge>
        <Background clock={clock} />
        <Path path={path} color="#3B3A3A" />
        <Play c={c} r={r} progress={progress} />
        <Overlay />
      </ContextBridge>
    </Canvas>
  );
};
