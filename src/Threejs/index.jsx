import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import gsap from 'gsap'

import { angle } from '../utils/angle';
import { BackSide } from 'three';
import { Lamp } from './components/Lamp'

import './styles.scss'
import { Car } from './components/Old_car';
import { ImageUtils } from 'three';
import { Tree1 } from './components/Tree1';
import { Palm } from './components/Palm';
import { Moon } from './components/Moon';


function Threejs() {

    //Animation
    const ballRef = useRef(null)

    // const skyTexture = useTexture('sky.jpg')

    useEffect(() => {
        setInterval(() => {
            if (ballRef.current) {

                const timeline = gsap.timeline()

                const { position } = ballRef.current
                gsap.to(position, {
                    x: 9,
                    duration: 2,
                    ease: 'power2.out'
                })

                gsap.to(position, {
                    y: 0.5,
                    duration: 1,
                    ease: 'bounce.out'
                }, '<')

                timeline.play()
            }
        }, 5000)
    }, [ballRef])


    return (
        <Canvas shadows>
            // Camera
            <PerspectiveCamera makeDefault position={[0, 1, 150]} />
            <OrbitControls minPolarAngle={angle(40)} maxPolarAngle={angle(87)} maxZoom={2} />

            // Objects
            {/* <mesh position={[-2, 2, 0]} castShadow ref={ballRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color='#dbd5c1' metalness={0.3} roughness={0} />
            </mesh> */}

            <Suspense fallback={null}>
                <Lamp />
            </Suspense>
            <Suspense fallback={null}>
                <Car />
            </Suspense>
            <Suspense fallback={null}>
                <Palm />
            </Suspense>
            <Suspense fallback={null}>
                <Tree1 />
            </Suspense>
            <Suspense fallback={null}>
                <Moon scale={0.2} position={[-300, 400, 1000]} />
                <spotLight args={['#fff', 0.4, 2000, 1000, 0, 1.5]} position={[-300, 400, 1000]} castShadow />
            </Suspense>

            <Suspense >
                <Plane />
            </Suspense>

            //Lights
            {/* <ambientLight args={['#ffffff', 0.1]} /> */}
            <spotLight args={['#fff', 1, 200, 1, 0.4, 1.5]} position={[1, 40, 0]} castShadow />

            //Envirement
            <Environment background>
                {/* <mesh scale={1}>
                    <sphereGeometry args={[2, 8, 8]} />
                    <meshBasicMaterial side={BackSide} color='yellow' map={skyTexture} />
                </mesh> */}
                <EnvTexture />
            </Environment>
        </Canvas>
    )
}


export default Threejs

function EnvTexture() {

    const skyTexture = useTexture('sky.jpg')

    return (
        <mesh scale={1}>
            <sphereGeometry args={[2, 8, 8]} />
            <meshBasicMaterial side={BackSide} map={skyTexture} />
        </mesh>
    )
}

function Plane() {

    const
        map = useTexture('/ground/BaseColor.jpg'),
        normalMap = useTexture('/ground/Normal.jpg'),
        displacementMap = useTexture('/ground/Height.png'),
        roughnessMap = useTexture('/ground/Roughness.jpg'),
        aoMap = useTexture('/ground/AmbientOcclusion.jpg')

    return (
        <mesh rotation={[-angle(90), 0, angle(0)]} receiveShadow scale={1} position={[0, 0, 0]}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color='#fff' {...{ map, normalMap, displacementMap, roughnessMap, aoMap }} />
        </mesh>
    )
}