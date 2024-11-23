const http=require('http')

const server=http.createServer((req,res)=>{
    if(req==='/'){
        res.write('welcome to ourhome')
        res.end()
    }
    if(req.url==='/about'){
        res.write('welcome to about')
        res.end()
    }
    res.end(`<h1>Not found</h1>`)
})

server.listen(3000)