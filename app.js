console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require('lodash');
const yargs = require('yargs'); 

const notes = require('./notes');

// Revceving command line arguments 
const argv = yargs.argv;
let command = process.argv[2];
console.log('changed again at 5:10');

command = argv._[0];
console.log("Command : ",command);
console.log("Process", process.argv);
console.log("Yargs", argv);
//console.log(_.yargs);


if(command === 'add'){
    notes.addNote(argv.title,argv.body);
}else if(command === 'remove') {
    notes.removeNote(argv.title);
}else if(command === 'get') {
    notes.getNote(argv.title);
}else if(command === 'preview'){
    notes.previewNote();
}else {
    console.log('Command not recognised');
}

// console.log(_.isString(true));
// console.log(_.isString('Nitin'));

// let res = notes.add(10,-8);

// console.log("Results : ", notes.add(10,8));

// module.exports.someFunction = () =>{
//     console.log("Hello from app.js");
// };

// console.log(module);
// var user = os.userInfo();

// fs.appendFileSync("output.txt",`${JSON.stringify(os.userInfo())}\n`);

// console.log(user.username);
// console.log("Platform",os.platform());
// fs.readFile('output.txt', (err, data) => {
//     if (err) throw err;
//     console.log("Printing data from file => ",data.toString());
//   });


// console.log("\n Os type",os.type());
// notes.greet();
// console.log("This is exported module => ",notes);