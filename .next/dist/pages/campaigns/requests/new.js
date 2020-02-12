'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layouts = require('../../../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/galaxtrac/Ethereum-Solidity/solidity/CrowdFund/pages/campaigns/requests/new.js?entry';


var RequestsNew = function (_Component) {
    (0, _inherits3.default)(RequestsNew, _Component);

    function RequestsNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestsNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestsNew.__proto__ || (0, _getPrototypeOf2.default)(RequestsNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            errorMessage: '',
            isLoading: false,
            success: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.setState({
                                    success: false,
                                    errorMessage: ''
                                });
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ isLoading: true });
                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;
                                _context.next = 11;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 11:
                                _this.setState({ success: true });
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({ isLoading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestsNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layouts2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Dimmer.Dimmable, { as: _semanticUiReact.Segment, blurring: true, dimmed: this.state.isLoading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.isLoading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Processing..')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: this.state.success, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Your transaction is successful',
                content: 'You had successfully created a requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'There are some error while Creating Requests !!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Create!'))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestsNew;
}(_react.Component);

exports.default = RequestsNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkRpbW1lciIsIlNlZ21lbnQiLCJMb2FkZXIiLCJDb250YWluZXIiLCJSZXF1ZXN0c05ldyIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsImlzTG9hZGluZyIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBYTs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFNLEFBQU8sQUFBUyxBQUFRLEFBQVMsQUFBUTs7Ozs7OztJLEFBRTFEOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFFRjttQkFBTSxBQUNJLEFBQ047eUJBRkUsQUFFVSxBQUNaO3VCQUhFLEFBR1EsQUFDVjswQkFKRSxBQUlZLEFBQ2Q7dUJBTEUsQUFLUyxBQUNYO3FCLEFBTkUsQUFNTztBQU5QLEFBQ0YsaUIsQUFXSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47MEVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQUs7NkNBQVMsQUFDRCxB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QUNJLGlDQUtQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFXLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxNQUFBLEFBQU0sT0FBeEMsQUFBUyxBQUFjLEFBQXdCO0FBRjlEOzs4QkFBQTtnQ0FuQlIsQUFpQkksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUixBQUFDLDBDQUFRLFNBQVQsTUFBaUIsUUFBakIsQUFBd0IsQUFDaEI7eUJBRFIsQUFDZ0I7OEJBRGhCO2dDQXhCSixBQXdCSSxBQUVJO0FBRko7Z0NBRUksQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUNJLG9EQUFtRCxTQUFTLEtBQUEsQUFBSyxNQURyRSxBQUMyRTs4QkFEM0U7Z0NBMUJSLEFBMEJRLEFBRUo7QUFGSTtnQ0FFSixBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQXRDWixBQUNJLEFBS0EsQUFJSSxBQTRCSSxBQUtmOzs7OzttSCxBQTNFNEI7Ozs7O2lDQUNsQjtBLDBDQUFXLE0sQUFBTSxNLEFBQWpCO2tFQUNBLEVBQUMsUyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFaVyxBQXdGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2dhbGF4dHJhYy9FdGhlcmV1bS1Tb2xpZGl0eS9zb2xpZGl0eS9Dcm93ZEZ1bmQifQ==