// function init() {
//     let isValid = true
//     console.log("init modal", isValid)
// }

// init()

(function (win, doc) {
    let isValid = false
    win.alert("ola mundo")
    console.log("modal", isValid)

    function init() {
        console.log("init do modal")
    }
    init()
})(window, document)