const http = require("http");
const server = http.createServer((req,res)=>{
   if(req.url === "/")
   {
       res.end(`
            <h1> Welcome to FakeBook page </h1>
            <a href="/about"> contact us </a>
       `)
   }
   if(req.url === "/about")
   {
       res.end(`
           <h1> I am a developer form somewhere in the world </h1>
       `);
   }
    console.log(req);
});
server.listen(5500,()=>console.log("server is listening on port 5500"));