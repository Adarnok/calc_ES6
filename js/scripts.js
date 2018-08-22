'use strict';
(function(){
    
    class Kalkulator {
        constructor(result) {
            this._guziczki = document.querySelectorAll('input[type="button"]');
            this._resPlace = document.querySelector('#' + result);
            console.log(this._guziczki);
            console.log(this._resultPlace);
            this._guziki(this._guziczki);
        }
        // Kalkulator.prototype._guziki = function(guzik){
        //     guzik.forEach(function(elem, i){
        //         elem.addEventListener('click', this._calc.bind(this), this);
        //     })
        // }
        _guziki(guzik) {
            guzik.forEach(this._click, this);
        }
        _click(elem, i) {
            elem.addEventListener('click', this._calc.bind(this));
        }
        _calc(button) {
            const buttonValue = button.target.value;
            if (buttonValue === 'C') {
                this._resPlace.value = '';
            }
            else if (buttonValue === '=') {
                this._resPlace.value = eval(this._resPlace.value);
            }
            else {
                this._resPlace.value += buttonValue;
            }
        }
    }


    
    new Kalkulator('res');
    // new Kalkulator();
})()