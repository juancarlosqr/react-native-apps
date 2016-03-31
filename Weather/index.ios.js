'use strict';

var registry = require('react-native').AppRegistry;
var Weather = require('./src/Weather');
registry.registerComponent('Weather', () => Weather);