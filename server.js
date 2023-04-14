const http=require('http')
const fs=require('fs')
const person={
    name:"Yash",
    lastname:"Jhalani"
}
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify(person))
// })

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Contant-Type":"text/html"})
//     const html=fs.readFileSync('./index.html',"utf-8")
//     res.end(html)
// })

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Contant-Type":"text/html"})
//     fs.createReadStream(__dirname+'/index.html').pipe(res)
// })

// const server=http.createServer((req,res)=>{
//     let name="Nikhil"
//     res.writeHead(200,{"Contant-Type":"text/html"})
//     let html=fs.readFileSync('./index.html','utf-8')
//     html=html.replace("{{name}}",name)
//     res.end(html)
// })
const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.writeHead(200,{"Contant-Type":"text/plain"})
    res.end("Home Page")
   }
   else if(req.url==='/about'){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("About Page")
   }else if(req.url==='/api'){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({
        name:"Yash",
        lastname:"Jhalani"
    }))
   }
   else{
    res.writeHead(404)
    res.end("Page not found")
   }
})



server.listen(3000,()=>{
    console.log("Server is running on port")
})