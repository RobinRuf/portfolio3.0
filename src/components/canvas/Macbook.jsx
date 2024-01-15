import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Macbook = ({ isMobile }) => {
  const macbook = useGLTF("./macbook/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[10, 10, 20]}
        angle={0.12}
        penumbra={1.0}
        intensity={0.8}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.8} />
      <primitive
        object={macbook.scene}
        scale={isMobile ? 0.6 : 1}
        position={isMobile ? [0.2, 0.05, 0] : [0.2, -0.06, 0]}
        rotation={[-0.01, 0, 0]}
      />
    </mesh>
  );
};

const MacbookCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [-15, 10, 5], fov: 1.4 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={[0.2, 0.15, 0]}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Macbook isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MacbookCanvas;
