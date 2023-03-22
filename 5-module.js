const sayHi = require('./3-module')
const names = require('./4-module')

sayHi('hii')
sayHi(names.john)
sayHi(names.peter)