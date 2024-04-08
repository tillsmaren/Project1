import "phaser";
import { GameScene, LoaderScene } from "./scenes";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 256,
  height: 224,
  zoom: 1,
  input: {
    keyboard: true,
    gamepad: true,
  },
  render: {
    pixelArt: false,
    antialias: true,
    antialiasGL: false,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        y: 300,
      },
    },
  },
  scene: [LoaderScene, GameScene],
};

window.addEventListener("load", () => new Phaser.Game(config));
