// run test with: DEBUG=* node lib/test.js 

// require different debug functions
var log = require('./debug')('app:log');
var info = require('./debug')('info');
var warn = require('./debug')('warn');
var dir = require('./debug')('dir');
var debug = require('./debug')('app:debug');
var error = require('./debug')('app:error');
var tb = require('./debug')('time');
var te = require('./debug')('timeEnd');
var trace = require('./debug')('trace:*');
var assert = require('./debug')('assert:whatever');

// run debugs
tb('huuu');
log('in the beginning was...');
info('20min');
warn('last chance');
debug('webgui', 'application loading');
error('err');
dir(console);
te('huuu');
trace('bla');
assert(true);