'use strict';
function calc(b) {
    const res = document.querySelector('#res');
    const liczba = b.value;
    if (b.value == "=") {
        res.value = eval(res.value);
    }
    else
    if (b) {
        res.value += liczba;
    }   
    if (b.value == "C") {
        res.value = '';
    }
}