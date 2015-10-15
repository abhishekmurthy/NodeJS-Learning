function calculatorFactory() {

    var result = 0;

    return {

        add : function (x) {
          result += x;
        },
        sub : function (x) {
          result -= x;
        },
        mul : function (x) {
          result *= x;
        },
        div : function (x) {
          result /= x;
        },
        showResult : function() {
            return result;
        }
    };
}

module.exports = calculatorFactory;
/* Exposing calculator module for public access */
