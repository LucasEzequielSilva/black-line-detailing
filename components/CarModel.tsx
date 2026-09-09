"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/car.glb");
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
    const distance = (maxDim / (2 * Math.tan(fov / 2))) * 1.2;

    camera.position.set(distance * 0.25, distance * 0.32, distance * 0.95);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [scene, camera]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

export default function CarModel() {
  return (
    <div className="w-full h-[420px] lg:h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 5, 5]} intensity={2.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.7} />
        <directionalLight position={[0, 2, -6]} intensity={2.2} color="#ffffff" />
        <directionalLight position={[-6, 0, 2]} intensity={1.2} color="#b8c2cc" />
        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
        </Suspense>
        <Suspense fallback={null}>
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={3.5} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
}
