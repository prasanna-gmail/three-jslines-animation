// First, create a new scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Then, create a new renderer and set its size to match the window
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a new MeshLine material
const material = new MeshLineMaterial({
    color: new THREE.Color(0xffffff),
    lineWidth: 0.05
});

// Create the points for the MeshLine
const points = [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0)];

// Create the MeshLine geometry
const geometry = new THREE.Geometry();
for (let i = 0; i < points.length; i++) {
    geometry.vertices.push(points[i]);
}
const meshLine = new MeshLine();
meshLine.setGeometry(geometry);

// Create the MeshLine mesh
const line = new THREE.Mesh(meshLine.geometry, material);
scene.add(line);

// Set up the animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the MeshLine mesh
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
