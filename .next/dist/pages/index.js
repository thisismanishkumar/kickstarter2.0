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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layouts = require('../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/galaxtrac/Ethereum-Solidity/solidity/CrowdFund/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, 'View Campaign')),
                    fluid: true,
                    raised: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layouts2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Open Campaign'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, animated: 'fade', floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Create Campaign'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }))))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyYWlzZWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7OzBDQVFnQixBQUNkO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQzlDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQ0EsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFDQTtBQURBO3FCQUFBLGtCQUNBLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKRyxBQUdILEFBQ0EsQUFHQTsyQkFQRyxBQU9JLEFBQ1A7NEJBUkosQUFBTyxBQVFJLEFBRWQ7QUFWVSxBQUNIO0FBRlIsQUFBYyxBQVlkLGFBWmM7aURBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FFRixBQUVMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFVBQWhCLEFBQXlCLFFBQU8sU0FBaEMsQUFBd0M7OEJBQXhDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjs4QkFBQTtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLG9DQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCOzhCQUFBO2dDQUFBLEFBQXVCO0FBQXZCOytCQUF1QixBQUFDLHVDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FOdkMsQUFFSSxBQUNJLEFBQ0ksQUFFSSxBQUF1QixBQUlsQztBQUprQzt5QkFSL0MsQUFDSSxBQUNJLEFBVUssQUFBSyxBQUlyQjs7Ozs7Ozs7Ozs7O3VDQXRDMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztpQ0FBekQ7QTtpRUFDQyxFQUFFLFcsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBSmEsQUE0QzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2dhbGF4dHJhYy9FdGhlcmV1bS1Tb2xpZGl0eS9zb2xpZGl0eS9Dcm93ZEZ1bmQifQ==