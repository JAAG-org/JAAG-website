import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// @ts-ignore
const loader = new THREE.FontLoader();
loader.load( 'fonts/Zen_Dots_Regular.json', function ( font ) {
	// @ts-ignore
	const text3D = new THREE.TextGeometry( 'JAAG', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 10,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 3,
		bevelSegments: 10
	} );
	const meshMaterial = new THREE.MeshNormalMaterial({
		flatShading: false,
		transparent: true,
		opacity: 0.9
	});
	const mesh = new THREE.Mesh(text3D, meshMaterial);
	mesh.position.set(-300, 0, 0);
	scene.add(mesh);
} );
let renderer;
camera.position.z = 300;
camera.position.x = 94;
camera.position.y = 60;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize();
  animate();
}

window.addEventListener('resize', resize);
