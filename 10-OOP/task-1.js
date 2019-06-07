function CoffeeMachine(power) {
    this.waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let self = this;
    
    function getBoilTime() {
            return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }
        
    function onReady() {
            timeId = void 0;
            console.log('Coffee is ready');
        }

    this.run = function() {
            timerId =  setTimeout(onReady, getBoilTime());
    };

    this.stop = function(){
        if (timerId){
            clearTimeout(timerId);
            timerId= void 0;
        }
        console.log("coffee isn't ready");
    }
}

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
