import * as THREE from "three";
import * as TWEEN from "/node_modules/three/examples/jsm/libs/tween.module.js";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshSurfaceSampler } from "/node_modules/three/examples/jsm/math/MeshSurfaceSampler.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/////////////////////////////////////////////////////////////////////////
//// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const loader = new OBJLoader();

/////////////////////////////////////////////////////////////////////////
///// DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE
const container = document.createElement("div");
document.body.appendChild(container);

/////////////////////////////////////////////////////////////////////////
///// SCENE CREATION
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe39469);

/////////////////////////////////////////////////////////////////////////
///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer(); // turn on antialias
renderer.setSize(window.innerWidth, window.innerHeight); // make it full screen
container.appendChild(renderer.domElement); // add the renderer to html div

/////////////////////////////////////////////////////////////////////////
///// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, -2, 10);
//camera.lookAt(points);
scene.add(camera);

/////////////////////////////////////////////////////////////////////////
///// MAKE EXPERIENCE FULL SCREEN
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);
    renderer.setPixelRatio(1);
    m.uniforms.iResolution.value.set(width, height);
});

/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
/////////////////////////////////////////////////////////////////////////
///// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load("/uxis.obj", function (obj) {
    sampler1 = new MeshSurfaceSampler(obj.children[0]).build();
    transformMesh1();
    playScrollAnimations();
});

loader.load("/sphere.obj", function (obj) {
    sampler2 = new MeshSurfaceSampler(obj.children[0]).build();
    transformMesh2();
});

/////////////////////////////////////////////////////////////////////////
///// TRANSFORM MESH INTO POINTS
let sampler1;
let points;
let pointsGeometry = new THREE.BufferGeometry();
const cursor = { x: 0, y: 0 };
const vertices1 = [];
const tempPosition1 = new THREE.Vector3();

function transformMesh1() {
    for (let i = 0; i < 30000; i++) {
        sampler1.sample(tempPosition1);
        vertices1.push(tempPosition1.x, tempPosition1.y, tempPosition1.z);
    }

    pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices1, 3));

    const pointsMaterial = new THREE.PointsMaterial({
        color: 0x5c0b17,
        size: 0.05,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
    });

    points = new THREE.Points(pointsGeometry, pointsMaterial);

    scene.add(points);
}

let sampler2;
const vertices2 = [];
const tempPosition2 = new THREE.Vector3();
function transformMesh2() {
    for (let i = 0; i < 30000; i++) {
        sampler2.sample(tempPosition2);
        vertices2.push(tempPosition2.x, tempPosition2.y, tempPosition2.z);
    }
}

/////////////////////////////////////////////////////////////////////////
//// INTRO CAMERA ANIMATION USING TWEEN
function introAnimation() {
    gsap.to(pointsGeometry.attributes.position.array, {
        endArray: vertices2,
        duration: 2,
        onUpdate: () => (pointsGeometry.attributes.position.needsUpdate = true),
    });
}

/////////////////////////////////////////////////////////////////////////
///// POST PROCESSING EFFECTS
let width = window.innerWidth;
let height = window.innerHeight;

/////////////////////////////////////////////////////////////////////////
//// RENDER LOOP FUNCTION
const animationScripts = [];
function rendeLoop() {
    renderer.render(scene, camera);
    requestAnimationFrame(rendeLoop); //loop the render function
}

rendeLoop(); //start rendering

let scrollPercent = 0;
function lerp(x, y, a) {
    return (1 - a) * x + a * y;
}

function scalePercent(start, end) {
    return (scrollPercent - start) / (end - start);
}

function playScrollAnimations() {
    // animationScripts.forEach((a) => {
    //     if (scrollPercent >= a.start && scrollPercent < a.end) {
    //         a.func()
    //     }
    // })
    gsap.to(pointsGeometry.attributes.position.array, {
        endArray: vertices2,
        scrollTrigger: {
            trigger: ".trigger",
            start: "top top",
            scrub: 1,
        },
        onUpdate: () => (pointsGeometry.attributes.position.needsUpdate = true),
    });
}

animationScripts.push({
    start: 40,
    end: 80,
    func: () => {
        // if(!pointsGeometry.attributes.position) return;
        const origin = pointsGeometry.attributes.position.array;
        const _targetArray = vertices2.map((value, idx) => {
            return lerp(origin[idx], value, scalePercent(40, 80));
        });
        pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(_targetArray, 3));
        //pointsGeometry.attributes.position.needsUpdate = true
    },
});

// document.body.onscroll = () => {
//     scrollPercent =
//         ((document.documentElement.scrollTop || document.body.scrollTop) /
//             ((document.documentElement.scrollHeight ||
//                 document.body.scrollHeight) -
//                 document.documentElement.clientHeight)) *
//         100
//     ;
// }
