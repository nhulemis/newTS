// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Attractor from "./Attractor";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Node)
    planet: cc.Node = null;

    @property(cc.Vec3)
    offset: cc.Vec3 = cc.Vec3.ZERO;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    lateUpdate(dt){

        let newPos = this.target.position.add( this.target.up.mulSelf(16));

        this.node.setPosition(newPos);

        let gravityUp = this.target.position.sub(this.planet.position).normalize();

        let targetRotation =  cc.quat();
        cc.Quat.rotationTo(targetRotation, this.node.up , gravityUp).multiply(this.node.getRotation(cc.quat()));

        this.node.setRotation(Attractor.slerp(cc.quat(), this.node.getRotation(cc.quat()),targetRotation,50*dt))


    }
}
