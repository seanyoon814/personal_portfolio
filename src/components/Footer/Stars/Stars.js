import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 10 });
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <points ref={ref} {...props}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={sphere.length / 3}
              array={sphere}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            attach="material"
            transparent
            color="white"
            size={0.001}
            sizeAttenuation
            depthWrite={false}
          />
        </points>
      </group>
    );
  };

  const StarsCanvas = () => {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none', 
        }}
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };
  
  

export default StarsCanvas;