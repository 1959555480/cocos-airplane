System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, input, Input, _dec, _class, _crd, ccclass, property, SelfPlane;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "220f5Nt1e1Ko4/FMAMfaN1w", "SelfPlane", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelfPlane", SelfPlane = (_dec = ccclass('SelfPlane'), _dec(_class = class SelfPlane extends Component {
        start() {
          input.on(Input.EventType.TOUCH_START, this._touchStart, this);
          input.on(Input.EventType.TOUCH_START, this._touchMove, this);
        }

        _touchStart(touch, event) {}

        _touchMove(touch, event) {
          console.log("移动");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b41705172a125ef063cd9b1af14e201cdd31da51.js.map