var KenController;
class Ken {
    constructor() {
        this.offset = 70;
        this.inactiveInterval;
        this.inactiveIntervalTime = 100;
        this.$ken = document.querySelector('.ken')
    }


    StartInactive() {
        var counter = 0;
        var $this = this;
        this.inactiveInterval = setInterval(() => {
            counter = counter == ($this.offset * 3) ? 0 : $this.offset + counter;
            this.$ken.style.backgroundPosition = `-${counter}px 0px`;
        }, this.inactiveIntervalTime)
    }

    StopInactive() {
        clearInterval(this.inactiveInterval)
    }
}

KenController = new Ken();

function startKen() {
    KenController.StartInactive()
}