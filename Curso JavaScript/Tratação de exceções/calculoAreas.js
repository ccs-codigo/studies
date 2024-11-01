function areaTriangulo(l, h) {
    if (typeof l !== "number" || typeof h !== "number") {
        throw new Error("A função aceita apenas números!");
    }
    return (l * h) / 2
}

function areaRetangulo(l, h) {
    if (typeof l !== "number" || typeof h !== "number") {
        throw new Error("A função aceita apenas números!");
    }
    return l * h
}

function areaCirculo(p, r) {
    if (typeof r !== "number") {
        throw new Error("A função aceita apenas números!");
    }
    return p * r ** 2
}