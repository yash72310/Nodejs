const EventEmitter=require('events')


class PizzaShop{
    constructor(){
        this.orderNumber=0;
    }

    order(){
        this.orderNumber++;
        this.emit('order',size,topping)

    }

    displayOrderNumber(){
        console.log(`Current Order Number is ${this.orderNumber}`)
    }
}

module.exports=PizzaShop