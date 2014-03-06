Unique, strong, friendly, short UUIDs  
==
[![Build Status](https://travis-ci.org/ogt/uuid-encoded.png)](https://travis-ci.org/uuid-encoded/arg1)

## Synopsis

Uses the [uuid](https://github.com/broofa/node-uuid) module to produce an rfc4122 v4 compliant uuid and then encodes it using a 64-char alphabet (by default includes upper, lower letters, numbers, `-`, `_`) to encode the uuid in a shortened (22 characters - instead of 32 hex)  but still url friendly string.  

The module is just a few lines of code

    var CHARS = '.PYFGCRLAOEUIDHTNSQJKXBMWVZ_pyfgcrlaoeuidhtnsqjkxbmwvz1234567890';
    module.exports = function (chars) {
        var uuid = require('uuid');
        var d64 = require('d64')(chars||CHARS);
        return d64.encode(uuid.v4(null,new Array(16),0))
    }

#Description
Using this module:

    > var uuid = require('uuid-encoded');
    > console.log(uuid());
    'xkfA7KJ1NEY7oFH21vEi7-'
    > console.log(uuid());
    'qOloinw5JJRBf-OPJIqrgx'
    > console.log(uuid());
    'wVeh8at4SB5UFnMQ69awQ-'
    > // use an alphabet that uses . instead of -
    > uuid('.PYFGCRLAOEUIDHTNSQJKXBMWVZ_pyfgcrlaoeuidhtnsqjkxbmwvz1234567890')
    'D7a1L0.PSvQo_DIjccTKuc'
    

## Installation 

Installing the module

    npm install uuid-enccoded

## Note

The [uuid](https://github.com/broofa/node-uuid) author is pointing out that these uuids are "cryptographically strong", ie unguessable strings. Still keep in mind that [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) points against the use of this format for trully "unguessable" keys. 
![image](https://f.cloud.github.com/assets/153419/2340802/b12d839e-a4ca-11e3-90ca-fc500a447f16.png)


