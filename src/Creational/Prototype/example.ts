interface IProtoType {
    clone(): this;
}

class MyClassShallow implements IProtoType {
    field: number[];

    constructor(field: number[]) {
        this.field = field;
    }

    clone(): this {
        return Object.assign({}, this);
    }
}

class MyClassDeep implements IProtoType {
    field: number[];

    constructor(field: number[]) {
        this.field = field;
    }

    clone(): this {
        return JSON.parse(JSON.stringify(this));
    }
}

const shallow = new MyClassShallow([1, 2, 3, 4, 5]);
const deep = new MyClassDeep([1, 2, 3, 4, 5]);

console.log(shallow.clone() === shallow);
console.log(deep.clone() === deep);
