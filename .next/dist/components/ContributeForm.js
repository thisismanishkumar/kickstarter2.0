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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/galaxtrac/Ethereum-Solidity/solidity/CrowdFund/components/ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            isLoading: false,
            success: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
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

                                _this.setState({ isLoading: true });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address);
                                _this.setState({ success: true });

                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({ isLoading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Plz!! Donate to this campaign'), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_semanticUiReact.Dimmer.Dimmable, { as: _semanticUiReact.Segment, blurring: true, dimmed: this.state.isLoading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.isLoading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Processing..')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: this.state.success, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'To Contribute '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'right',
                placeholder: 'Enter some ether',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Your transaction is successful',
                content: 'You had helped a needy guy.', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'There are some error while donating to campaign !!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Donate'))));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiRGltbWVyIiwiU2VnbWVudCIsIkxvYWRlciIsIkNvbnRhaW5lciIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImlzTG9hZGluZyIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQVMsQUFBUSxBQUFTLEFBQVE7O0FBQ2hFLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUNGO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVVLEFBQ2Q7dUJBSEksQUFHTyxBQUNYO3FCLEFBSkksQUFJSztBQUpMLEFBQ0osaUIsQUFLSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBSzs2Q0FBUyxBQUNELEFBQ1Q7a0RBRkosQUFBYyxBQUVJLEFBRWxCO0FBSmMsQUFDVjtzQ0FHSixBQUFNLEFBQ0E7QUFOQywyQ0FNVSx3QkFBUyxNQUFBLEFBQUssTUFOeEIsQUFNVSxBQUFvQixBQUNyQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsV0FQVCxBQU9QLEFBQWMsQUFBYTtnREFQcEI7Z0RBQUE7dUNBU29CLGNBQUEsQUFBSyxJQVR6QixBQVNvQixBQUFTOztpQ0FBMUI7QUFUSCxvREFBQTtnREFBQTtnREFVRyxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzFCLFNBRCtCLEFBQy9CLEFBQVMsQUFDZjsyQ0FBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWnBDLEFBVUcsQUFBbUMsQUFFOUIsQUFBbUM7QUFGTCxBQUNyQyxpQ0FERTs7aUNBSU47K0NBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLEFBQzFDO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBZmIsQUFlSCxBQUFjLEFBQVc7O2dEQWZ0QjtBQUFBOztpQ0FBQTtnREFBQTtnRUFtQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFuQjNCLEFBbUJILEFBQWMsQUFBb0I7O2lDQUV0QztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxXQXJCVCxBQXFCUCxBQUFjLEFBQWE7O2lDQXJCcEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0F1QkY7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDBFQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQyxjQUFELHdCQUFBLEFBQVEsWUFBUixBQUFpQixBQUFJLDhCQUFTLFVBQTlCLE1BQXVDLFFBQVEsS0FBQSxBQUFLLE1BQXBELEFBQTBEOzhCQUExRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxRQUFRLEtBQUEsQUFBSyxNQUFyQixBQUEyQjs4QkFBM0I7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBQ0ksQUFDSSxBQUVKLGtDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxjQUFjLFNBQVMsS0FBQSxBQUFLLE1BQS9FLEFBQXFGOzhCQUFyRjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGM0QsQUFHSTt1QkFISixBQUdVLEFBQ047K0JBSkosQUFJa0IsQUFDZDs2QkFMSixBQUtnQjs7OEJBTGhCO2dDQUhSLEFBQ0ksQUFFSSxBQVFKO0FBUkk7QUFDSSxpQ0FPUixBQUFDLDBDQUFRLFNBQVQsTUFBaUIsUUFBakIsQUFBd0IsQUFDcEI7eUJBREosQUFDWTs4QkFEWjtnQ0FYSixBQVdJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQ0ksdURBQXNELFNBQVMsS0FBQSxBQUFLLE1BRHhFLEFBQzhFOzhCQUQ5RTtnQ0FiSixBQWFJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQXZCaEIsQUFDSSxBQUdJLEFBSUksQUFlSSxBQUtuQjs7Ozs7QUFHTCxBLEFBOUQ2Qjs7a0JBOEQ3QixBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dhbGF4dHJhYy9FdGhlcmV1bS1Tb2xpZGl0eS9zb2xpZGl0eS9Dcm93ZEZ1bmQifQ==