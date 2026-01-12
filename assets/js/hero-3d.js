import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class Hero3DScene {
    constructor() {
        console.log('Hero3DScene: Initializing...');
        this.container = document.getElementById('hero-3d-container');
        this.canvas = document.getElementById('hero-canvas');

        if (!this.container || !this.canvas) {
            console.error('Hero3DScene: Container or Canvas not found!');
            return;
        }

        this.init();
        this.loadModel();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.set(0, 0, 8);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffaa33, 3);
        dirLight.position.set(5, 5, 5);
        this.scene.add(dirLight);

        const rimLight = new THREE.DirectionalLight(0x4455ff, 2);
        rimLight.position.set(-5, 5, -5);
        this.scene.add(rimLight);

        this.clock = new THREE.Clock();
    }

    loadModel() {
        const loader = new GLTFLoader();

        loader.load(
            './assets/models/Chef_model_2.glb',
            (gltf) => {
                this.model = gltf.scene;
                this.scene.add(this.model);

                // Center model
                const box = new THREE.Box3().setFromObject(this.model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                this.model.position.sub(center);

                // Scale
                const maxDim = Math.max(size.x, size.y, size.z);
                const targetSize = window.innerWidth < 768 ? 4.0 : 5.0;
                const scale = targetSize / (maxDim || 1);
                this.model.scale.setScalar(scale);

                // Default position
                if (window.innerWidth < 768) {
                    this.model.position.set(0, -0.8, 0);
                } else {
                    this.model.position.set(2.8, -0.6, 0);
                }

                // ✅ BASE LEFT TILT (IMPORTANT PART)
                this.baseRotationY = -Math.PI / 8; // ~22.5° left
                this.model.rotation.y = this.baseRotationY;

                // Animations
                this.mixer = new THREE.AnimationMixer(this.model);
                if (gltf.animations.length > 0) {
                    const action = this.mixer.clipAction(gltf.animations[0]);
                    action.play();
                }
            },
            undefined,
            (error) => {
                console.error('Hero3DScene: Error loading model', error);
            }
        );
    }

    addEventListeners() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        if (this.model) {
            if (window.innerWidth < 768) {
                this.model.position.set(0, -0.8, 0);
            } else {
                this.model.position.set(3.0, -0.6, 0);
            }
        }
    }

    onMouseMove(event) {
        if (!this.model) return;

        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        const targetX = mouseY * 0.05;
        const targetY = this.baseRotationY + mouseX * 0.1;

        this.model.rotation.x += (targetX - this.model.rotation.x) * 0.05;
        this.model.rotation.y += (targetY - this.model.rotation.y) * 0.05;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const delta = this.clock.getDelta();
        if (this.mixer) this.mixer.update(delta);

        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Hero3DScene();
});
