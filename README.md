Generates a rfc4122 v4 uuid encoded with a url-friendly base64 alphabet
==
[![Build Status](https://travis-ci.org/ogt/uuid-encoded.png)](https://travis-ci.org/uuid-encoded/arg1)

## Synopsis
The module is just a few lines of code

    var CHARS = '.PYFGCRLAOEUIDHTNSQJKXBMWVZ_pyfgcrlaoeuidhtnsqjkxbmwvz1234567890';
    module.exports = function (chars) {
        var uuid = require('uuid');
        var d64 = require('d64')(chars||CHARS);
        return d64.encode(uuid.v4(null,new Array(16),0))
    }

#Description
Using this module:
```
> var uuid = require('uuid-encoded');
> console.log(uuid());
'xkfA7KJ1NEY7oFH21vEi7-'
> console.log(uuid());
'qOloinw5JJRBf-OPJIqrgx'
> console.log(uuid());
'wVeh8at4SB5UFnMQ69awQ-'
```

## Installation 

Installing the module

    npm install uuid-enccoded

