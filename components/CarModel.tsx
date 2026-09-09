"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { Component, Suspense, useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";

const TARGET_SIZE = 4.5;

function Model() {
  const { scene } = useGLTF("/car.glb");
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // normaliza modelos con escalas absurdas (ej: exportados en cm/mm)
    // a un tamaño consistente, sin importar la unidad original del archivo.
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scaleFactor = TARGET_SIZE / maxDim;
    scene.scale.setScalar(scaleFactor);
    scene.position.set(-center.x * scaleFactor, -center.y * scaleFactor, -center.z * scaleFactor);

    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
    const distance = (TARGET_SIZE / (2 * Math.tan(fov / 2))) * 1.2;

    camera.position.set(distance * 0.25, distance * 0.32, distance * 0.95);
    camera.lookAt(0, 0, 0);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.near = distance / 100;
      camera.far = distance * 20;
    }
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

class ModelErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state: { error: string | null } = { error: null };

  static getDerivedStateFromError(error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }

  componentDidCatch(error: unknown) {
    console.error("[CarModel] failed to load /car.glb:", error);
  }

  render() {
    if (this.state.error) {
      return (
        <mesh>
          <boxGeometry args={[1, 0.5, 2]} />
          <meshStandardMaterial color="#7a1f1f" />
        </mesh>
      );
    }
    return this.props.children;
  }
}

export default function CarModel() {
  return (
    <div className="w-full h-[420px] lg:h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40, near: 0.01, far: 10000 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 5, 5]} intensity={2.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.7} />
        <directionalLight position={[0, 2, -6]} intensity={2.2} color="#ffffff" />
        <directionalLight position={[-6, 0, 2]} intensity={1.2} color="#b8c2cc" />
        <ModelErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
        </ModelErrorBoundary>
        <Suspense fallback={null}>
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={3.5} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
}
