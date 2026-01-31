import React from "react"
import { Canvas } from "@react-three/fiber"
import {
    OrbitControls,
    ContactShadows,
    Environment,
} from "@react-three/drei"
import { Robot } from "/src/components/Robot"

export default function RobotCanvas() {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 2.8, 7], fov: 45 }}
            gl={{ antialias: true }}
        >
            {/* Base light (keep low so shadows look real) */}
            <ambientLight intensity={0.35} color="#fff4e6" />

            {/* Key light (main shadow caster) */}
            <directionalLight
                position={[4, 6, 3]}
                intensity={1.2}
                castShadow
                color="#ffd9b3"
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5}
                shadow-camera-far={25}
                shadow-camera-left={-6}
                shadow-camera-right={6}
                shadow-camera-top={6}
                shadow-camera-bottom={-6}
                shadow-bias={-0.00025}
            />

            {/* Fill light (softens harsh shadows) */}
            <directionalLight
                position={[-4, 3, -2]}
                intensity={0.35}
                color="#fff1dc"
            />

            {/* Environment = metals look good */}
            <Environment preset="city" />

            {/* Robot */}
            <group scale={2.5} position={[1.5, -3, -3]} rotation={[0, -4.5, 0]}>
                <Robot url="/models/robot.glb" autoplay />
            </group>

            {/* Soft “grounding” shadow */}
            <ContactShadows
                position={[0, -2.9, 0]}
                opacity={0.45}
                scale={10}
                blur={2.8}
                far={5}
            />

            {/* Optional ground plane (subtle) */}
            <mesh receiveShadow position={[0, -3.5, -4]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#333333" roughness={0.85} metalness={0.05} />
            </mesh>

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2.1}
            />
        </Canvas>
    )
}
