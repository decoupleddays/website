'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodeFromData = datum => {
  const { attributes: { id: _attributes_id } = {} } = datum,
        attributes = (0, _objectWithoutProperties3.default)(datum.attributes, ['id']);
  const preservedId = typeof _attributes_id !== 'undefined' ? { _attributes_id } : {};
  return (0, _extends3.default)({
    id: datum.id,
    parent: null,
    children: []
  }, attributes, preservedId, {
    internal: {
      type: datum.type.replace(/-|__|:|\.|\s/g, '_')
    }
  });
};

exports.nodeFromData = nodeFromData;
//# sourceMappingURL=normalize.js.map