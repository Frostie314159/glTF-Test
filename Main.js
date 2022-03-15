async function loadFile(url) {
    return new Promise(async (resolve) => {
        resolve(await fetch(url));
    });
}
async function main() {
    var gltfFile = await (await loadFile("test.gltf")).json();
    var binFile = await (await loadFile("test.bin")).arrayBuffer();
    console.log(gltfFile);
}
main();
