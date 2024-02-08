new WOW(
    {
        animateClass: 'animate__animated'
    }).init();

export class App {
    constructor() {
        this.allProgress = document.querySelectorAll('.progress');
        this.skillItems = document.querySelectorAll('.additional-skills-item');
        this.navTriggerElement = document.getElementById('navTrigger');
        this.mainListElement = document.getElementById('mainList');
        this.headerConnainerElement = document.querySelector('.header .container');
        this.headerElement = document.querySelector('.header');
        this.addWowAnimate();
        this.toggleMenu();
        this.scrollFunction();
    }
    
    addWowAnimate() {
        this.allProgress.forEach(item=> {
           item.classList.add('wow', 'animate__animated') ;
        });
        
        this.skillItems.forEach(item=> {
            item.classList.add('wow', 'animate__animated', 'animate__backInDown');
        });
    }
    
    scrollFunction() {
        window.addEventListener('scroll', ()=> {
            let scrollTop =  (document.documentElement && document.documentElement.scrollTop)
                || document.body.scrollTop;

            if (scrollTop > 100) {
                this.headerConnainerElement.classList.add('affix');
            } else {
                this.headerConnainerElement.classList.remove('affix');
            }
        });

    }
    
    toggleMenu() {
        this.navTriggerElement.addEventListener('click', ()=> {
            this.navTriggerElement.classList.toggle('active');
            this.mainListElement.classList.toggle('show_list');
        });

        document.querySelectorAll('.navbar-item').forEach(item=> {
           item.addEventListener('click', ()=> {
               this.mainListElement.classList.toggle('show_list');
               this.navTriggerElement.classList.toggle('active');
           });
        });
    }
}

(new App());

