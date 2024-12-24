import Swal from 'sweetalert2'
// or via CommonJS
const Swal = require('sweetalert2')

function test() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
};
var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#273463, #8B4256)'
});