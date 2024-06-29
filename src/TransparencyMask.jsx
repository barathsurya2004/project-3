import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import glsl from "glslify";
export const useTransparencyMask = (children) => {
  const { camera } = useThree();
  const originalMaterials = useRef(new Map());

  useEffect(() => {
    if (children) {
      const traverse = (node) => {
        if (node.isMesh) {
          const originalMaterial = node.material;

          // Store the original material
          originalMaterials.current.set(node, originalMaterial);

          // Clone the original material and modify the shader
          const material = originalMaterial.clone();
          material.onBeforeCompile = (shader) => {
            shader.uniforms.uCameraPosition = { value: camera.position };

            shader.vertexShader = glsl`
              varying vec3 vNormal;
              varying vec3 vWorldPosition;
              ${shader.vertexShader}
            `.replace(
              `#include <begin_vertex>`,
              `
              #include <begin_vertex>
              vNormal = normalize(normalMatrix * normal);
              vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            `
            );

            shader.fragmentShader = glsl`
              uniform vec3 uCameraPosition;
              varying vec3 vNormal;
              varying vec3 vWorldPosition;
              ${shader.fragmentShader}
            `.replace(
              `#include <dithering_fragment>`,
              `
              #include <dithering_fragment>
              vec3 cameraToVertex = normalize(vWorldPosition - uCameraPosition);
              float dotProduct = dot(vNormal, cameraToVertex);
              float opacity = 1.0 - dotProduct;
              gl_FragColor.a *= opacity;
            `
            );
          };

          node.material = material;
        }
        if (node.children) {
          node.children.forEach((child) => traverse(child));
        }
      };

      traverse(children);
    }

    return () => {
      if (children) {
        const traverse = (node) => {
          if (node.isMesh && originalMaterials.current.has(node)) {
            node.material = originalMaterials.current.get(node);
          }
          if (node.children) {
            node.children.forEach((child) => traverse(child));
          }
        };
        traverse(children);
      }
    };
  }, [children, camera.position]);
};

const TransparencyMask = ({ children }) => {
  const groupRef = useRef();

  useTransparencyMask(groupRef.current);

  return <group ref={groupRef}>{children}</group>;
};

export default TransparencyMask;
