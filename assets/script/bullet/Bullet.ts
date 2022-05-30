import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

const OUTSCENE = -15;
@ccclass("Bullet")
export class Bullet extends Component {
  private _bulletSpeed = 0;
  @property
  public bulletSpeed = 10;

  start() {}

  update(deltaTime: number) {
    const pos = this.node.position;
    const moveLength = pos.z - this.bulletSpeed;
    this.node.setPosition(pos.x, pos.y, moveLength);

    if (moveLength < OUTSCENE) {
      this.node.destroy();
    }
  }

  show(){
    // this._bul
  }
}
