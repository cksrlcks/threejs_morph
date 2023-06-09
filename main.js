import * as THREE from "three";
import Lenis from "@studio-freight/lenis";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshSurfaceSampler } from "/node_modules/three/examples/jsm/math/MeshSurfaceSampler.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let color = "#3D8CD0";

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
//scene.background = new THREE.Color(0xe39469);

/////////////////////////////////////////////////////////////////////////
///// loading spinner
const loadingSpinner = document.querySelector(".loader-wrapper");

/////////////////////////////////////////////////////////////////////////
///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer(); // turn on antialias
renderer.setSize(window.innerWidth, window.innerHeight); // make it full screen
container.appendChild(renderer.domElement); // add the renderer to html div

/////////////////////////////////////////////////////////////////////////
///// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0.05, 0, 10);
scene.add(camera);

/////////////////////////////////////////////////////////////////////////
///// MAKE EXPERIENCE FULL SCREEN
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(1);
});

// let oldx = 0;
// let oldy = 0;
// window.addEventListener('mousemove', function(e){
//     let changex = e.x - oldx;
//     let changey = e.y - oldy;
//     camera.position.x += changex/10000;
//     camera.position.y -= changey/10000;

//     oldx = e.x;
//     oldy = e.y;
// })
/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
//const controls = new OrbitControls(camera, renderer.domElement);
//controls.enableZoom = false;

/////////////////////////////////////////////////////////////////////////
///// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load("/uxis.obj", function (obj) {
    sampler1 = new MeshSurfaceSampler(obj.children[0]).build();
    transformMesh1(() => {
        transformMesh3();
        playScrollAnimations();
    });
});
loader.load("/globe.obj", function (obj) {
    sampler2 = new MeshSurfaceSampler(obj.children[0]).build();
    transformMesh2();
});

/////////////////////////////////////////////////////////////////////////
///// TRANSFORM MESH INTO POINTS
let sampler1;
let points;
let pointsGeometry = new THREE.BufferGeometry();
const vertices1 = [];
const tempPosition1 = new THREE.Vector3();

function transformMesh1(callback) {
    for (let i = 0; i < 25155 / 3; i++) {
        sampler1.sample(tempPosition1);
        vertices1.push(tempPosition1.x, tempPosition1.y, tempPosition1.z);
    }

    pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices1, 3));
    const sprite = new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/circle.png");
    const pointsMaterial = new THREE.PointsMaterial({
        size: 0.06,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        sizeAttenuation: true,
        alphaMap: sprite,
    });
    points = new THREE.Points(pointsGeometry, pointsMaterial);

    scene.add(points);
    callback && setTimeout(callback);
}

let sampler2;
const vertices2 = [];
const tempPosition2 = new THREE.Vector3();
function transformMesh2() {
    for (let i = 0; i < 25155 / 3; i++) {
        sampler2.sample(tempPosition2);
        vertices2.push(tempPosition2.x, tempPosition2.y, tempPosition2.z);
    }
}

let vertices3 = new THREE.SphereGeometry(2, 64, 128).attributes.position.array;

function transformMesh3() {}
function rendeLoop() {
    if (points) {
        points.rotation.y += 0.001;

        points.material.color = new THREE.Color(color);

        pointsGeometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);

    requestAnimationFrame(rendeLoop); //loop the render function
}

rendeLoop(); //start rendering

function playScrollAnimations() {
    loadingSpinner.classList.add("hide");

    const tl = gsap
        .timeline()
        .to(".sec-01 h2", { opacity: 0, y: -10, duration: 0.2 })
        .to(".sec-01 .logo", { y: window.innerHeight / 2.8, scale: 0.7 }, "key1")
        .to(
            pointsGeometry.attributes.position.array,
            {
                endArray: vertices3,
                duration: 1,
            },
            "key1"
        )
        .fromTo(".sec-02 h2", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.2 })
        .fromTo(".sec-02 p", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.2 })
        .to(".sec-02 ", { opacity: 1, duration: 1 })
        .to(".sec-02 ", { opacity: 0, y: -10 }, "key2")
        .to(
            pointsGeometry.attributes.position.array,
            {
                endArray: vertices2,
                duration: 2,
            },
            "key2"
        )
        .to("canvas", { opacity: 0.4 }, "key3", "+=0.4")
        .fromTo(".sec-03 h2", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.2 }, "key3")
        .fromTo(".sec-03 p", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.2 });

    ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: tl,
        onUpdate: (self) => {
            pointsGeometry.attributes.position.needsUpdate = true;
            if (self.progress < 0.5) {
                color = points.material.color.lerpColors(new THREE.Color("#3D8CD0"), new THREE.Color("#5c0b17"), self.progress * 2);
            } else {
                const alpha = (self.progress - 0.5) * 2;
                color = points.material.color.lerpColors(new THREE.Color("#5c0b17"), new THREE.Color("#59f464"), alpha);
            }
        },
    });
}
