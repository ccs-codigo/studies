const teste = function teste(cb) {
    console.log("Função teste")
    cb("fn passado por parametro para cb")
}

const fn = function fn(p) {
    console.log("Funcao de callback")
    console.log(p)
}
// fn(30)
teste(fn)

 console.log(5%3)