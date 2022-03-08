import React, { useRef } from "react";
import { OrbitControls, RoundedBox, Sphere, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Example12() {
  const sphere = useRef<THREE.Mesh>();

  useFrame((state, delta) => {
    if (sphere.current) {
      sphere.current.rotation.x += 0.01;
      // sphere.current.translateX(sphere.current.position.x - 0.1);
    }
  });
  return (
    <>
      <ambientLight intensity={0.9} />
      <OrbitControls/>
      {/* <pointLight intensity={10} position={[5, 0, 0]} color={0x0000ff} /> */}
      {/* <directionalLight castShadow /> */}
      <Stars radius={10} depth={1} count={5000} factor={1} saturation={0} fade />
      <spotLight position={[10,20,10]} angle={0.5}></spotLight>
      <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
        <meshPhongMaterial attach="material" color="#0000ff" wireframe />
      </RoundedBox>
    </>
  );
}

export default Example12;
