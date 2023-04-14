const math=require('./math')
const data=require('./data.json')
const path=require('path')
const EventEmitter=require('events')
const emitter=new EventEmitter()
const fs=require("fs")
const readableStream=fs.createReadStream('./file.txt',{
    encoding:'utf-8',
    highWaterMark:2
})

const writableStream=fs.createWriteStream('./file2.txt') 

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
//     writableStream.write(chunk)

// })

readableStream.pipe(writableStream) //The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable. 

// const fileContent=fs.readFileSync('./file.txt','utf-8')
// console.log(fileContent)


// const buffer=new Buffer.from("Yash")
// console.log(buffer)
// console.log(buffer.toJSON())

// const PizzaShop=require('./pizza-Shop')
// const pizzaShop=new PizzaShop()


// emitter.on('order-pizza',()=>{
//     console.log("Ordered Pizza. Baking a Pizza")
// })
// emitter.emit("order-pizza")


// emitter.on('order-pizza',(size,topping)=>{
//     console.log(`Ordered Pizza. Baking a ${size} Pizza and topping is ${topping}`)
// })
// emitter.on('order-pizza',(size)=>{
//     if(size==="large"){
//         console.log("You have got free drink")
//     }
// })

// emitter.emit("order-pizza","large","jalpeno")



// pizzaShop.order()
// pizzaShop.displayOrderNumber()

// pizzaShop.on('order',(size,topping)=>{
//     console.log(`Pizza size is ${size} and topping is ${topping}`)
// })

// pizzaShop.order("large","Mushroom")
// pizzaShop.displayOrderNumber()


// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
// console.log(path.parse(__filename))
// console.log(path.isAbsolute(__filename))



// const {add,subtract}=math
// console.log(add(10,3))
// console.log(data)
// console.log(data.name)