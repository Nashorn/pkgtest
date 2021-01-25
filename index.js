var http_server = require("http-server");
const kill = require('kill-port');
var path = require("path");
const cwd = process.cwd();
var exec = require('child_process').exec;
var s = process.execPath;
    s = s.substr(0,s.lastIndexOf("/"));


    console.log("app path",s);
    console.log("process.execPath",path.dirname(process.execPath));
    console.log("process.cwd",process.cwd());
    console.log("process.pkg",process.pkg);
    console.log("process.versions",process.versions)
    
    // exec("kill-port --port 8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095");
    // setTimeout(e => {
    //     kill([8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095], 'tcp')
    //         .then(e => {
    //                 process.chdir(s);
    //                 exec(`npm start`);
                    
    //                 console.log("app path",s);
    //                 console.log("process.execPath",path.dirname(process.execPath));
    //                 console.log("process.cwd",process.cwd());
    //                 console.log("process.pkg",process.pkg);
    //                 console.log("process.versions",process.versions)
    //                 if(http_server){
    //                     console.log("http_server", "successs");
    //                 }else{
    //                     console.log("http_server", "Server module not found")
    //                 }        
    //         })
    //         .catch(console.log)
    // },2000);
    // process.chdir(s);