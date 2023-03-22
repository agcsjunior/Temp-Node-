const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('WElcome to our home page')
    }else
    if(req.url === '/about'){
        res.end('WElcome to our About page')
    }else{
   

res.end(`
    <h1> Oops!</h1>
    <p> We can't seem to find the page you are lookinh for</p>
     <a href="/">back Home </a>
`)
    }
}  )

console.log(http)
console.log(server)


// here req = Incoming Request
//      res = Respond What we are sending back
// console.log(http)


server.listen(3000)