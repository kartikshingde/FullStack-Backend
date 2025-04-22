const http=require('http')

//server on node.js

const server=http.createServer((req,res)=>{
    // res.end("Hello coder army")

    if(req.url=="/"){
        res.end("Hello coder army!!")

    }
    else if(req.url=="/contact"){
        res.end("This is our contact page")
    }

    else if(req.url=="/about"){
        res.end("You are on about us Page!")
    }
    else{
        res.end("Error:Page not Found")
    }

})


server.listen(4000,()=>{
    console.log(`Server is Listening on Port {4000}`)
})

//This will not be used , as we are using express.js