new WOW(
    {
            animateClass: 'animate__animated'
    }).init();


(function () {
    const Index = {
        allProgress: null,
        skillItems: null,
        init() {
            this.allProgress = document.getElementsByClassName('progress');
            Array.from(this.allProgress).forEach(item => {
                item.classList.add("wow", "animate__animated");
            })
            this.skillItems = document.getElementsByClassName('additional-skills-item');
            Array.from(this.skillItems).forEach(item => {
                item.classList.add("wow","animate__animated", "animate__backInDown")
            })
        }
    }
    Index.init();
})();