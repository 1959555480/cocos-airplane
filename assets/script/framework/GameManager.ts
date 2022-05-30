import { _decorator, Component, Node, Prefab, instantiate } from "cc";
import { Bullet } from "../bullet/Bullet";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  public playerPlane: Node = null  //玩家飞机
  @property(Prefab)
  public bullet01: Prefab = null //子弹
  @property(Prefab)
  public bullet02: Prefab = null //子弹
  @property(Prefab)
  public bullet03: Prefab = null //子弹
  @property(Prefab)
  public bullet04: Prefab = null //子弹
  @property(Prefab)
  public bullet05: Prefab = null //子弹

  @property
  public shootTime = 0.3
  @property
  public bulletSpeed = 1

  @property(Node)
  public bulletRoot: Node = null  //管理所有子弹的节点
  private _currShootTime = 0 //当前触摸时间
  private _isShooting = false

  start() {
    this._init()
  }

  update(deltaTime: number) {
    this._currShootTime += deltaTime
    if(this._isShooting && this._currShootTime>this.shootTime){
      this.createBullet() // 创建子弹
      this._currShootTime = 0
    }
  }

  public createBullet(){
    // 创建预制需要先实例
    const bullet = instantiate(this.bullet01)
    // 实例化后的预制并不在场景 需要setParent
    bullet.setParent(this.bulletRoot)
    // 设置子弹位置 （相对飞机位置）
    const pos = this.playerPlane.position
    bullet.setPosition(pos.x,pos.y,pos.z-2)
    // const bulletComp = bullet.getComponent(Bullet)
    // bulletComp.bulletSpeed = this.bulletSpeed

  }
  private _init(){
    this._currShootTime = this.shootTime //默认开始发射一颗
  }

  // 判断是否触摸 才发射
  public isShooting(value:boolean){
    this._isShooting = value
  }
}
