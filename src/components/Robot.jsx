import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Robot({
                        url = "/models/robot.glb",
                        autoplay = true,
                        ...props
                      }) {
  const group = useRef()
  const { scene, animations } = useGLTF(url)
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    // Enable shadows for every mesh/material in the loaded scene
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true

        // Improve shadow behavior on some GLTF imports
        if (obj.geometry) obj.geometry.computeVertexNormals?.()

        if (obj.material) {
          obj.material.needsUpdate = true
        }
      }
    })
  }, [scene])

  useEffect(() => {
    if (!autoplay || !actions || !names?.length) return

    // Play the first animation clip if present
    const first = actions[names[0]]
    if (first) {
      first.reset().fadeIn(0.2).play()
      return () => first.fadeOut(0.2)
    }
  }, [autoplay, actions, names])

  return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
  )
}

useGLTF.preload("/models/robot.glb")
