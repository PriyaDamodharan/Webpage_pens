"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var svg = document.querySelector('svg');
var inner = document.querySelector('.inner');
var outer = document.querySelector('.outer');
var sparkles = __spreadArrays(document.querySelector('.sparkles').children);
var filled = document.querySelector('.filled');
var stroke = document.querySelector('.stroke');
var playspeed = 1;
var keyframes = [
    /*  0 */ 0.00,
    /*  1 */ 0.10,
    /*  2 */ 0.20,
    /*  3 */ 0.25,
    /*  4 */ 0.30,
    /*  5 */ 0.35,
    /*  6 */ 0.40,
    /*  7 */ 0.60,
    /*  8 */ 0.65,
    /*  9 */ 0.70,
    /*  10 */ 0.75,
    /*  11 */ 0.76,
    /*  12 */ 1.00,
];
var timespan = function (start, end) { return ({
    delay: keyframes[start] * (1 / playspeed),
    duration: (keyframes[end] - keyframes[start]) * (1 / playspeed),
}); };
var liked = false;
var toggle = function () {
    if (liked) {
        gsap.fromTo(stroke, { opacity: 0 }, __assign({ opacity: 1 }, timespan(0, 2)));
        gsap.to(filled, __assign({ opacity: 0 }, timespan(0, 2)));
    }
    else {
        gsap.set([stroke, filled], { opacity: 0 });
        gsap.fromTo(outer, { opacity: 1, scale: 0.3, svgOrigin: '50 50' }, __assign({ opacity: 1, scale: 1 }, timespan(0, 1)));
        outer.querySelectorAll('*').forEach(function (path) {
            gsap.fromTo(path, { fill: '#000' }, __assign({ fill: path.getAttribute('fill') }, timespan(0, 4)));
        });
        inner.querySelectorAll('*').forEach(function (path) {
            gsap.fromTo(path, { fill: '#000' }, __assign({ fill: path.getAttribute('fill') }, timespan(0, 1)));
        });
        gsap.fromTo(inner, { scale: 0.3, opacity: 1, svgOrigin: '50 50' }, __assign({ scale: 1 }, timespan(0, 5)));
        gsap.to([inner, outer], __assign({ scale: 0, opacity: 0 }, timespan(6, 9)));
        gsap.fromTo(filled, { scale: 0, svgOrigin: '50 50', opacity: 1, }, __assign({ scale: 1, ease: 'back.out(2)' }, timespan(6, 12)));
        gsap.fromTo(sparkles.slice(0, 4), { strokeDashoffset: -5 }, __assign({ strokeDashoffset: -15 }, timespan(6, 10)));
        gsap.fromTo(sparkles.slice(4, 8), { strokeDashoffset: -5 }, __assign({ strokeDashoffset: -15 }, timespan(5, 9)));
        gsap.fromTo(sparkles.slice(8, 12), { strokeDashoffset: -5 }, __assign({ strokeDashoffset: -15 }, timespan(4, 8)));
        gsap.fromTo(sparkles.slice(12, 16), { strokeDashoffset: -5 }, __assign({ strokeDashoffset: -15 }, timespan(3, 7)));
        gsap.fromTo(sparkles.slice(16, 20), { strokeDashoffset: -5 }, __assign({ strokeDashoffset: -15 }, timespan(2, 6)));
    }
    svg.style.pointerEvents = 'none';
    setTimeout(function () { svg.style.pointerEvents = ''; }, liked ? 200 : 700);
    liked = !liked;
};
svg.addEventListener('click', toggle);
toggle();