import React, { useRef } from "react";
import { PresentationControls, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Example11() {
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
      <pointLight intensity={10} position={[5, 0, 0]} color={0x0000ff} />
      <directionalLight castShadow />
      {/* <fog attach="fog" args={["white", 0, 40]} /> */}
      {/* <group position={[-1, -1, -1]}> */}

      <PresentationControls
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={10} // Speed factor
        zoom={2} // Zoom factor when half the polar-max is reached
        rotation={[90, 90, 0]} // Default rotation
        polar={[0, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
        <Sphere
          ref={sphere}
          rotation={[10, 0, 0]}
          position={[0, 0, 0]}
          scale={2.5}
          // castShadow
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
        >
          {/* <Sphere
          // ref={sphere}
          rotation={[90, 0, 0]}
          position={[0, 0, 0]}
          scale={1}
          // castShadow
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
        >
          <meshStandardMaterial attach="material" color={"red"} wireframe />
        </Sphere> */}
          {/* <meshStandardMaterial attach="material" color={0xe5d54d}/> */}
          <meshStandardMaterial attach="material" color={"green"} wireframe />
          {/* <fog near={10} far={20} color={0x00ff00} isFog={true}></fog> */}
        </Sphere>
      </PresentationControls>
      {/* </group> */}
    </>
  );
}

export default Example11;
