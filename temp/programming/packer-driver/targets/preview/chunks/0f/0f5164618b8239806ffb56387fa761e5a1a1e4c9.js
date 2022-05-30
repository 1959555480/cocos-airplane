System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eee3cylgrxCD6HapV2N1OSv", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playerPlane", _descriptor, this);

          _initializerDefineProperty(this, "bullet01", _descriptor2, this);

          _initializerDefineProperty(this, "bullet02", _descriptor3, this);

          _initializerDefineProperty(this, "bullet03", _descriptor4, this);

          _initializerDefineProperty(this, "bullet04", _descriptor5, this);

          _initializerDefineProperty(this, "bullet05", _descriptor6, this);

          _initializerDefineProperty(this, "shootTime", _descriptor7, this);

          _initializerDefineProperty(this, "bulletSpeed", _descriptor8, this);

          _initializerDefineProperty(this, "bulletRoot", _descriptor9, this);

          this._currShootTime = 0;
          this._isShooting = false;
        }

        start() {
          this._init();
        }

        update(deltaTime) {
          this._currShootTime += deltaTime;

          if (this._isShooting && this._currShootTime > this.shootTime) {
            this.createBullet(); // 创建子弹

            this._currShootTime = 0;
          }
        }

        createBullet() {
          // 创建预制需要先实例
          var bullet = instantiate(this.bullet01); // 实例化后的预制并不在场景 需要setParent

          bullet.setParent(this.bulletRoot); // 设置子弹位置 （相对飞机位置）

          var pos = this.playerPlane.position;
          bullet.setPosition(pos.x, pos.y, pos.z + 6); // const bulletComp = bullet.getComponent(Bullet)
          // bulletComp.bulletSpeed = this.bulletSpeed
        }

        _init() {
          this._currShootTime = this.shootTime; //默认开始发射一颗
        } // 判断是否触摸 才发射


        isShooting(value) {
          this._isShooting = value;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bullet01", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet02", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bullet03", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet04", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bullet05", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "shootTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletRoot", [_dec8], {
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
//# sourceMappingURL=0f5164618b8239806ffb56387fa761e5a1a1e4c9.js.map