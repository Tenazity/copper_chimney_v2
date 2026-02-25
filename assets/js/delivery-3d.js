
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export function initDelivery3D() {
    console.log('initDelivery3D: Starting...');

    // Skip 3D initialization on mobile devices for performance
    if (window.innerWidth < 768) {
        console.log('initDelivery3D: Mobile detected, skipping 3D model loading.');
        return;
    }

    const canvas = document.querySelector('#delivery-canvas');
    if (!canvas) {
        console.error('initDelivery3D: Canvas #delivery-canvas not found');
        return;
    }

    const container = canvas.parentElement;

    // Scene setup
    const scene = new THREE.Scene();

    // Fog to blend with background
    // Matching the dark background color roughly #1a1a1a
    scene.fog = new THREE.FogExp2(0x1a1a1a, 0.08);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 1, 8);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xffd700, 1.5); // Gold rim light
    backLight.position.set(-5, 2, -5);
    scene.add(backLight);

    const fillLight = new THREE.DirectionalLight(0x4444ff, 0.8); // Cool fill from other side
    fillLight.position.set(5, 0, -5);
    scene.add(fillLight);

    // Ground Plane (Shadow catcher)
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.5;
    plane.receiveShadow = true;
    scene.add(plane);

    // Model loading
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    let model;
    let mixer;
    const clock = new THREE.Clock();

    console.log('initDelivery3D: Loading model from ./assets/models/fast_boy_in_quill.glb');
    loader.load('./assets/models/boy_compresses_1.glb', (gltf) => {
        console.log('initDelivery3D: Model loaded successfully');
        model = gltf.scene;

        model.scale.set(4.5, 4.5, 4.5);
        model.position.set(0, -2.5, 0);

        // Enable shadows
        model.traverse((node) => {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });

        scene.add(model);

        // Animation Mixer
        if (gltf.animations && gltf.animations.length) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
        }

        renderer.render(scene, camera);

    }, undefined, (error) => {
        console.error('An error occurred loading the delivery model:', error);
    });

    // Roaming Path (Adjusted for "Hero" view)
    // A gentler curve that stays more central
    // Linear movement path (One direction)
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-8, -1.5, 0),
        new THREE.Vector3(8, -1.5, 0)
    ]);
    curve.closed = false;

    // Animation Loop
    let progress = 0;
    function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        if (mixer) mixer.update(delta);

        if (model) {
            // Fixed in center
            model.position.set(0, -1.5, 0);

            // Straight facing (towards the camera)
            model.lookAt(0, -1.5, 5);
        }

        renderer.render(scene, camera);
    }

    animate();

    // Resize handling
    window.addEventListener('resize', () => {
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const aspect = width / height;

        camera.aspect = aspect;

        // Mobile adjustments: Zoom out more if narrow
        if (width < 768) {
            camera.position.set(0, 2, 7);
        } else {
            // Desktop: Camera closer/angled
            camera.position.set(0, 1.5, 6);
        }

        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // Initial resize check
    const event = new Event('resize');
    window.dispatchEvent(event);
}

// Auto-init if not imported
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDelivery3D);
} else {
    initDelivery3D();
}
