import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { PARTICLES } from "../../styles/particles.style";
import Particles from "react-tsparticles";

interface BackgroundProps {}

const Background: React.FC<BackgroundProps> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <Particles options={PARTICLES} init={particlesInit} />;
};

export default Background;
