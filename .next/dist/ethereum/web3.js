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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsVUFBZ0IsQUFBaEIsZUFBK0IsT0FBTyxPQUFPLEFBQWQsUUFBc0IsQUFBeEQsYUFDQSxBQUNJO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUhELE9BS0EsQUFDSTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixBQUNiO0FBQ0E7QUFGYSxBQUFqQixBQUlBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYWxheHRyYWMvRXRoZXJldW0tU29saWRpdHkvc29saWRpdHkvQ3Jvd2RGdW5kIn0=