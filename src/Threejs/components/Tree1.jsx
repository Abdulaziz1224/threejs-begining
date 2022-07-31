/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: aliyeredon (https://sketchfab.com/aliyeredon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/realistic-tree-vol2-736ac8ccedcb41288d81adafae44f4ad
title: Realistic Tree Vol.2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tree1(props) {
  const { nodes, materials } = useGLTF('/tree/tree1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mobile_Tree_2_Tree_Trunk_0.geometry} material={materials.Tree_Trunk} />
          <mesh castShadow receiveShadow geometry={nodes.Mobile_Tree_2_Tree_Leaf_0.geometry} material={materials.Tree_Leaf} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tree/tree1.glb')