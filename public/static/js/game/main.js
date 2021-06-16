/*
 * BABYLON imported from https://cdn.babylonjs.com/babylon.max.js
 * Refer to public/views/game.html#2
 */

const canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const engine = BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
});

function createScene() {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.FreeCamera('camera_1', new BABYLON.Vector3(0, 5, -10), scene);
    
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);

    const light = new BABYLON.HemisphericLight('light_1', new BABYLON.Vector3(0, 1, 0), scene);
    const sphere = BABYLON.Mesh.CreateSphere('sphere_1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);

    sphere.position.y = 1;

    const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);

    return scene;
}

export function main() {
    const scene = createScene();
    engine.runRenderLoop(() => scene.render());

    window.addEventListener('resize', () => {
        // engine.resize();
    });
}