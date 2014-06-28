'use strict';

var utils = require('./utils')
    , Node = require('./node');

// base component class
var Component = utils.inherit(Node, {
    owner: null
    , phase: null
    // initializes this component
    , init: function() {

    }
    // updates the logic for this component
    , update: function() {

    }
    // available component phases
    , phases: {
        LOGIC: 1
        , INPUT: 2
        , MOVEMENT: 3
        , NETWORK: 4
        , PHYSICS: 5
    }
});

module.exports = Component;
