/*jshint globalstrict: true, devel: true, node:true */
'use strict';

var cached = function (cache, fun) {
    return function F(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        } else {
            cache[n] = fun(F, n);
        }
        return cache[n];
    };
};

var fibonacci = cached([1, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

var factorial = cached([1], function (recur, n) {
    return recur(n - 1) * n;
});

console.log(fibonacci(5));