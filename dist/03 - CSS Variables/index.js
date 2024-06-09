"use strict";
(function () {
    const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
        //data set contains all the data-XXX attributes as an object
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    inputs.forEach((input) => input.addEventListener('change', handleUpdate));
    inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
})();
