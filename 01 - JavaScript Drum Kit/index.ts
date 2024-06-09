(function() {
    function playSound(e: KeyboardEvent) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLDivElement;

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    }

    function removeTransition(this: HTMLElement, e: TransitionEvent) {
        if (e.propertyName !== "transform") return;
        this.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key')) as HTMLElement[];
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
})();
