class Buffer {
    byteLength: number;
    arrayBuffer: ArrayBuffer;
    constructor(bufferInfo) {
        this.byteLength = bufferInfo.byteLength;
        loadFile(bufferInfo.uri).then(async (response: Response) => {
            this.arrayBuffer = await response.arrayBuffer();
        });
    }
}
class BufferView {
    buffer: number;
    byteLength: number;
    byteOffset: number;
    constructor(bufferViewInfo) {
        this.buffer = bufferViewInfo.buffer;
        this.byteLength = bufferViewInfo.byteLength;
        this.byteOffset = bufferViewInfo.byteOffset;
    }
}
class Accessor {
    bufferView: number;
    componentType: number;
    count: number;
    type: string;
    constructor(accessorInfo) {
        this.bufferView = accessorInfo.bufferView;
        this.componentType = accessorInfo.componentType;
        this.count = accessorInfo.count;
        this.type = accessorInfo.type;
    }
}
class Attribute {
    name: string;
    accessor: number;
    constructor(name:string, accessor: number){
        this.name = name;
        this.accessor = accessor;
    }
}
class Primitive {
    attributes: Attribute[];
    indicesAccessor: number;
    constructor(primitiveInfo){
        for(const key in primitiveInfo){

        }
    }
}
class Mesh {
    name: string;
}
class glTF {
    buffers: Buffer[];
    bufferViews: BufferView[];
    accessors: Accessor[];
}
async function loadFile(url: string): Promise<Response> {
    return new Promise(async (resolve) => {
        resolve(await fetch(url));
    });
}
async function main() {
    var gltfFile: JSON = await (await loadFile("test.gltf")).json();
    var binFile: ArrayBuffer = await (await loadFile("test.bin")).arrayBuffer();
    console.log(gltfFile);
}
main();