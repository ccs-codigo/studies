(function () {

    function calcMedia() {
        let total = 0
        let qtd = arguments.length
        for (let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== "number") {
                throw Error("Only numbers");
            }
            total += arguments[i]
        }
        return total / qtd
    }
    let media = calcMedia(10,20) || 0
    console.log(media)
})()