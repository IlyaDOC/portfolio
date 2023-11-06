new WOW(
    {
            animateClass: 'animate__animated'
    }).init();


(function () {
    const Index = {
        allProgress: null,
        init() {
            this.allProgress = document.getElementsByClassName('progress');
            Array.from(this.allProgress).forEach(item => {
                item.classList.add("wow", "animate__animated");
            })
        }
    }
    Index.init();
})();