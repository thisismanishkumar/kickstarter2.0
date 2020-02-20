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

var _Layouts = require('../../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/galaxtrac/Ethereum-Solidity/solidity/CrowdFund/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of manager',
                description: 'Manager Created this Campaign and can only create requests',
                style: { overflowWrap: 'break-word' },
                raised: true
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute this much money to become an approver for requests.',
                raised: true
            }, {
                header: requestsCount,
                meta: 'Number of requests',
                description: 'A requests tries to withdraw money from campaign. Request must be from manager',
                raised: true
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                raised: true,
                description: 'Number of people who have already donated to Campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance (Ether)',
                raised: true,
                description: 'Balance left in the Campaign to use.'
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layouts2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderCards(), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'View Requests')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log(summary);
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJhaXNlZCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQVEsQUFBVTs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O3NDQWNXO3lCQU9MLEtBUEssQUFPQTtnQkFQQSxBQUVMLGlCQUZLLEFBRUw7Z0JBRkssQUFHTCxpQkFISyxBQUdMO2dCQUhLLEFBSUwsNkJBSkssQUFJTDtnQkFKSyxBQUtMLHVCQUxLLEFBS0w7Z0JBTEssQUFNTCx3QkFOSyxBQU1MLEFBRUo7O2dCQUFNO3dCQUNGLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHZ0IsQUFDWjt1QkFBUSxFQUFFLGNBSmQsQUFJWSxBQUFpQixBQUN6Qjt3QkFOSyxBQUNULEFBS1k7QUFMWixBQUNJLGFBRks7d0JBUVQsQUFDVyxBQUNQO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdpQixBQUNiO3dCQVpLLEFBUVQsQUFJWTtBQUpaLEFBQ0k7d0JBS0osQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdpQixBQUNiO3dCQWxCSyxBQWNULEFBSWE7QUFKYixBQUNJO3dCQUtKLEFBQ2EsQUFDVDtzQkFGSixBQUVXLEFBQ1A7d0JBSEosQUFHYSxBQUNUOzZCQXhCSyxBQW9CVCxBQUlrQjtBQUpsQixBQUNJO3dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQvQixBQUNZLEFBQTJCLEFBQ25DO3NCQUZKLEFBRVUsQUFDTjt3QkFISixBQUdhLEFBQ1Q7NkJBOUJSLEFBQWEsQUEwQlQsQUFJa0IsQUFHdEI7QUFQSSxBQUNJO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBcUI7OEJBQXJCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBRUgsQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNKO0FBREk7QUFBQSxhQUFBLGtCQUNKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURJLEFBQ0osQUFDQSxrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBQUEsQUFDSyxBQUFLLEFBQ047OzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQyw4QkFBSyx1QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQU5oQixBQUNJLEFBR0ksQUFDSSxBQUNJLEFBSVoscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUUsMENBQVcsU0FBUyxLQUFBLEFBQUssTUFBM0IsQUFBaUM7OEJBQWpDO2dDQWRSLEFBQ0ksQUFFSixBQVVJLEFBQ0ksQUFLWDtBQUxXOzs7Ozs7aUgsQUF2RWlCOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTlDO0EsbURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZOzs2Q0FFQSxNQUFBLEFBQU0sTUFEWCxBQUNpQixBQUNwQjt5REFBcUIsUUFGbEIsQUFFa0IsQUFBUSxBQUM3Qjs2Q0FBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjttREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjtvREFBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7NkNBQVMsUSxBQU5OLEFBTU0sQUFBUTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRVosQSxBQWhGMkI7O2tCQWdGM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2dhbGF4dHJhYy9FdGhlcmV1bS1Tb2xpZGl0eS9zb2xpZGl0eS9Dcm93ZEZ1bmQifQ==