// 'use strict';
//
// // HTML contains element 'message'. This is used to show the server's response
// // Select it and save it as a variable/object
//
// // make function 'upload' which
// // - prevents the form from sending
// // - writes 'Upload in progress...' into 'message' element
// // - selects the file input field
// // - makes FormData -object and adds the file selected byt the user into the object
// // - send the file to the same url as in task a by using fetch -method
// // - when file upload is complete, writes server response to 'message' element
// // function ends
//
// // make an event listener which calls upload function when the form is submitted
const message = document.querySelector('#message');
const myForm = document.querySelector('form');

myForm.addEventListener('submit', event => {
    event.preventDefault();
    message.innerHTML = 'Upload in progress';
    const input = document.querySelector('input[type="file"]');
    const data = new FormData();
    console.log('Input file is'+ input.files[0]);
    data.append('image', input.files[0]);
    // make an object for settings
    const settings = {
        method: 'POST',
        // credentials: 'same-origin', // this might be needed for some servers
        body: data
    };
    // initiate fetch. In this example the server responds with text.
    // Response could also be json. Then you would use response.json()
    fetch('http://10.114.32.124/node/upload', settings).then((response) => {
        console.log(response);
        return response.text();
    }).then ((text) => {
        message.innerHTML = text;
    });
});

