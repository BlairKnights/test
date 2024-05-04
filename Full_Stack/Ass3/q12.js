"use strict";
var OperatingSystem = function (obj) {
    console.log('\nAndroid ' + obj.name + ' has ' + obj.language + ' language.\n');
};
var Oreo = { name: 'O', language: 'Java' };
OperatingSystem({ name: 'O', language: 'Java' });
