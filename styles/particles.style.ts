import {
  IOptions,
  IParticlesOptions,
  RecursivePartial,
} from "tsparticles-engine";
import { BLUE } from "./color.style";

const particlesOptions: RecursivePartial<IParticlesOptions> = {
  number: {
    value: 50,
    density: {
      enable: true,
      value_area: 800,
    },
  },
  shape: {
    type: "polygon",
    stroke: {
      width: 0,
      color: "#000000",
    },
    polygon: {
      sides: 6,
    },
  },
  color: {
    value: BLUE[200],
  },
  size: {
    value: 40,
    random: false,
  },
};

export const PARTICLES: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: BLUE[100],
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
  },
  particles: {
    ...particlesOptions,
  },
  move: {
    enable: true,
    speed: 2,
    direction: "none",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};
