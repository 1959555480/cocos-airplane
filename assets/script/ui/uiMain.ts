import { _decorator, Component, Node, SystemEvent, input, Input, EventTouch } from 'cc';
import { GameManager } from '../framework/GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UIMain extends Component {

    @property
    public planeSpeed = 3;

    @property(Node)
    public player:Node = null

    @property(GameManager)
    public gameManage: GameManager = null

    start() {
      input.on(Input.EventType.TOUCH_START,this._touchStart,this)
      input.on(Input.EventType.TOUCH_MOVE,this._touchMove,this)
      input.on(Input.EventType.TOUCH_END,this._touchEnd,this)
    }
    _touchStart(event:EventTouch){
      this.gameManage.isShooting(true)
    }
    _touchMove(event:EventTouch){
      const delta = event.getDelta()
      let pos = this.player.position;
      this.player.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y);
    }
    _touchEnd(event:EventTouch){
      this.gameManage.isShooting(false)
    }
    update(deltaTime: number) {
        
    }
}

