import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const gltfLoader = new GLTFLoader();
gltfLoader.load(
	'model/JAAG.glb',
	(gltf) => {
		scene.add(gltf.scene)
	},
	(progess) => {
		console.log((progess.loaded / progess.total * 100) + '% loaded');
	}
)

let renderer;
let pointLight

pointLight = new THREE.PointLight(0xe21a00, 0.5)
pointLight.position.set(10, 10, 10);
scene.add(pointLight)

const directionalLight = new THREE.DirectionalLight(0xe21a00, 0.3)
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight)

camera.position.x = 4
camera.position.y = 22
camera.position.z = 10
scene.add(camera)


const animate = () => {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight - 10)
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

const onMouseMove = (event) => {
	event.preventDefault();
  	const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  	const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
	const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
	vector.unproject(camera);
	const dir = vector.sub(camera.position).normalize();
	const distance = -camera.position.z / dir.z;
	const pos = camera.position.clone().add(dir.multiplyScalar(distance));

	pointLight.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
}

export const createScene = (el) => {
	
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	renderer.setClearColor('black', 1);
	renderer.outputEncoding = THREE.sRGBEncoding;
	resize();
	animate();
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', onMouseMove, false);
