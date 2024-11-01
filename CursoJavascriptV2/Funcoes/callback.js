const teste = function teste(cb) {
    console.log("Função teste")
    if (typeof cb === "function") {
        cb("fn passado por parametro para cb")
    }
}

const fn = function fn(p) {
    console.log("Funcao de callback")
    console.log(p)
}
// fn(30)
teste(fn)