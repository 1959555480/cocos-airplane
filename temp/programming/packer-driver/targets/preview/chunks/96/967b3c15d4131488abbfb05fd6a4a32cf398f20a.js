System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, input, Input, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SelfPlane;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
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

      _export("SelfPlane", SelfPlane = (_dec = ccclass('SelfPlane'), _dec2 = property(Node), _dec(_class = (_class2 = class SelfPlane extends Component {
        constructor() {
          super(...arguments);
          this.planeSpeed = 1;

          _initializerDefineProperty(this, "player", _descriptor, this);
        }

        start() {
          input.on(Input.EventType.TOUCH_START, this._touchStart, this);
          input.on(Input.EventType.TOUCH_START, this._touchMove, this);
        }

        _touchStart(event) {
          var delta = event.getDelta();
          console.log("??????", delta);
        }

        _touchMove(event) {
          var delta = event.getDelta();
          var pos = this.player.position;
          this.player.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y);
          console.log("??????", this.player);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=967b3c15d4131488abbfb05fd6a4a32cf398f20a.js.map