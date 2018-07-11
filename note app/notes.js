console.log('STARTING NOTES.js')

var addNote = (title,body)=>{
    console.log('ADDING NOTE',title,body);
};


var getAll = () => {
    console.log("removing note")
}

var getNote = (title) => {
    console.log('geeting note',title)
}

var removeNote = (title) => {
    console.log('removing note',title);
}
module.exports ={
    addNote,
    getAll,
    removeNote,
    getNote,
};