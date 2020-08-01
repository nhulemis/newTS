// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Attractor from "./Attractor";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SmoothCamera extends cc.Component {

    static smoothCamera: SmoothCamera = null;

    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Node)
    planet: cc.Node = null;

    @property
    offset:number = 20;

    timeToReturnForward:number = 1;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        SmoothCamera.smoothCamera = this;
    }

    start () {

    }

    // update (dt) {}

    lateUpdate(dt){

        let newPos = this.target.position.add( this.target.up.mulSelf(this.offset));

        this.node.setPosition(newPos);

        if(this.timeToReturnForward <= 1)
        {
            let forward = this.target.forward;
            let targetRotation = cc.Quat.rotationTo(cc.quat(), this.node.forward , forward).multiply(this.node.getRotation(cc.quat()));
            this.node.setRotation(Attractor.slerp(cc.quat(), this.node.getRotation(cc.quat()),targetRotation,5*dt))
            this.timeToReturnForward+= dt;
        }

        let gravityUp = this.target.position.sub(this.planet.position).normalize();

        let targetRotation =  cc.quat();
        cc.Quat.rotationTo(targetRotation, this.node.up , gravityUp).multiply(this.node.getRotation(cc.quat()));

        this.node.setRotation(Attractor.slerp(cc.quat(), this.node.getRotation(cc.quat()),targetRotation,50*dt))


    }
}
