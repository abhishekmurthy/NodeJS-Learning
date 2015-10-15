var calculator = {

    result : 0,

    add : function (x) {
        this.result += x;
    },
    sub : function (x) {
        this.result -= x;
    },
    mul : function (x) {
        this.result *= x;
    },
    div : function (x) {
        this.result /= x;
    },
    showResult : function() {
        return this.result;
    }
};

module.exports = calculator;
/* Exposing calculator module for public access */
