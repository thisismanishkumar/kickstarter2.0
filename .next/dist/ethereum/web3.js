'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider(
    // 'https://rinkeby.infura.io/v3/fefd36760efb4b1c9e94f04fa3f8e3f0'
    'https://testnet2.matic.network');
    web3 = new _web2.default(provider);
}

exports.default = web3;