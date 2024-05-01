const rangeInput = document.querySelector('#range');

function updateSpeed(event) {
    let square = document.getElementById('cube');
    square.style["-webkit-animation-duration"] = event.target.value + "s";
}

rangeInput.addEventListener('change', updateSpeed);