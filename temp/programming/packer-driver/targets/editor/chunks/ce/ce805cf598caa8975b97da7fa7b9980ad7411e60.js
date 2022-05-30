System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _descriptor, _crd, ccclass, property, OUTSCENE, Bullet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2999lSGl1EQLRdLi3r0VEu", "Bullet", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      OUTSCENE = 5;

      _export("Bullet", Bullet = (_dec = ccclass("Bullet"), _dec(_class = (_class2 = class Bullet extends Component {
        constructor(...args) {
          super(...args);
          this._bulletSpeed = 0;

          _initializerDefineProperty(this, "bulletSpeed", _descriptor, this);
        }

        start() {}

        update(deltaTime) {
          const pos = this.node.position;
          const moveLength = pos.z - this.bulletSpeed;
          this.node.setPosition(pos.x, pos.y, moveLength);

          if (moveLength > OUTSCENE) {
            this.node.destroy();
            console.log("销毁");
          }
        }

        show() {// this._bul
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce805cf598caa8975b97da7fa7b9980ad7411e60.js.map