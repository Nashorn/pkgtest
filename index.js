var http_server = require("http-server");
const cwd = process.cwd();
var exec = require('child_process').exec;
var s = process.execPath;
    s = s.substr(0,s.lastIndexOf("/"));



process.chdir(s);
exec(`http-server ${s} -o index.html`)
// exec(`npm start`);

console.log("process.execPath",s);
console.log("process.versions",process.versions)
if(http_server){
    console.log("http_server", "successs");
}else{
    console.log("http_server", "Server module not found")
}
