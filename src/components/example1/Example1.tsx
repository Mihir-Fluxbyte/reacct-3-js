import React, { useCallback, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Example1() {
  const mesh = useRef<THREE.Mesh>();
    const state = useThree();
    console.log("State>>>", state);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const color = isHovered ? 0xe5d54d : isActive ? 0xf7e7e5 : 0xf95b3c;

  const onHover = useCallback(
    (e, value) => {
      console.log("called");
      e.stopPropagation(); // stop it at the first intersection
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      setIsActive((v) => !v);
    },
    [setIsActive]
  );

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  //   useFrame( ({gl,scene,camera....}) => {
  //     mesh.current.rotation.y += 0.1
  //   })

  return (
    // <Canvas>
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={10} position={[800, 0, 200]} color={0xff0000} />
      <group position={[-1, -1,-1]}>
        <mesh
          ref={mesh}
          position={[2, 0, 0]}
          //   onClick={(e) => onClick(e)}
          onWheel={(e) => console.log("wheel spins")}
          onPointerDown={(e) => console.log("down")}
          onPointerUp={(e) => console.log("up")}
          onClick={(e) => console.log("click")}
          onContextMenu={(e) => console.log("context menu")}
          onDoubleClick={(e) => console.log("double click")}
          onPointerOver={(e) => console.log("over")}
          onPointerEnter={(e) => console.log("enter")} // see note 1
          onPointerOut={(e) => console.log("out")}
          onPointerLeave={(e) => console.log("leave")} // see note 1
          onPointerMove={(e) => console.log("move")}
          onPointerMissed={() => console.log("missed")}
          onUpdate={(self) => console.log("props have been updated")}
          //   onPointerOver={(e) => onHover(e, true)}
          //   onPointerOut={(e) => onHover(e, false)}
        >
          <boxBufferGeometry
            attach="geometry"
            args={[1.047, 1.5, 1.29, 5, 5, 5]}
          />
          <meshStandardMaterial color={color} attach="material" />
        </mesh>
      </group>
      <group position={[1.9, 0.9, 0.9]}>
        <mesh
          ref={mesh}
          position={[0, 0, 0]}
          onClick={(e) => onClick(e)}
          onPointerOver={(e) => onHover(e, true)}
          onPointerOut={(e) => onHover(e, false)}
        >
          <boxBufferGeometry args={[1.047, 1.5, 1.29, 5, 5, 5]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </>
    // </Canvas>
  );
}

export default Example1;
