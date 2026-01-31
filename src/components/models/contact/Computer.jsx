import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/Robot.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
        />
        <mesh
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Robot.glb");

export default Computer;
