(function() {


    var alph = ["A", "B", "C", "D", "E", "F", "G", "H"]
    var MAX_CELL = 8;

    var _gridContainer = document.querySelector('#container');
    for (var i = 0; i < MAX_CELL; i++) {
        for (var j = 0; j < MAX_CELL; j++) {
            if ((i + j) % 2 == 0) {
                _gridContainer.insertAdjacentHTML('beforeend', `<div id="sqare${alph[i] + j}" class="black">
                </div>`);
            } else {
                _gridContainer.insertAdjacentHTML('beforeend', `<div id="sqare${alph[i] + j}" class="white">
                </div>`);
            }

        }
    }
})();