import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('bg').appendChild(renderer.domElement);

const points = new THREE.BufferGeometry();
const count = 1000;
const pos = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
points.setAttribute('position', new THREE.BufferAttribute(pos, 3));

const mat = new THREE.PointsMaterial({
  color: 0xa3d1ff,
  size: 0.04,
  transparent: true,
  opacity: 0.6
});

const cloud = new THREE.Points(points, mat);
scene.add(cloud);

let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

const animate = () => {
  requestAnimationFrame(animate);
  cloud.rotation.x += (mouseY * 0.05 - cloud.rotation.x) * 0.05;
  cloud.rotation.y += (mouseX * 0.05 - cloud.rotation.y) * 0.05;
  renderer.render(scene, camera);
};
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});