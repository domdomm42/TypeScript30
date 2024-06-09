(function() {

    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.controls input')

    function handleUpdate(this: HTMLInputElement) {
        //data set contains all the data-XXX attributes as an object
        const suffix : string = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }

    inputs.forEach((input) => input.addEventListener('change', handleUpdate))
    inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))

}) ();