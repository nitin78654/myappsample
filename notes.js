console.log("starting notes.js");

// module.exports.addNote = ()=>{
//     console.log("addNote");
//     return `New Note`;
// };;

// module.exports.add = (a,b) =>{
//     return a+b;
// };

let addNote = (title,body) =>{
    console.log('Adding note', title, body);
  //  return note;
}

let getNote = (title) =>{
    console.log('Getting note',title);
};

let removeNote = (title) => {
    console.log('Removing note', title);
}

let previewNote = () => {
    console.log('Previewing note');
};
//console.log(module);

module.exports = {
   addNote,
   getNote,
   removeNote,
   previewNote
};