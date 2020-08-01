// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Attractor from "./Attractor";
import SmoothCamera from "./SmoothFollow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Controller extends cc.Component {
    rotation:number = 0;

    @property
    rotationSpeed: number = 70;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyUp(event) {
        switch (event.keyCode){
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                    this.rotation = 0;
                    SmoothCamera.smoothCamera.timeToReturnForward = 0;
                break;

        }
    }
    onKeyDown(event) {
        switch (event.keyCode){
            case cc.macro.KEY.a:
                console.log("a")
                    this.rotation = 1;
                break;
            case cc.macro.KEY.d:
                console.log("d");
                    this.rotation = -1;
                break;

        }
    }

    start () {

    }

    update (dt) 
    {
        
    }

    lateUpdate(dt)
    {
        
            let yRotation = this.node.up.mul(this.rotation * this.rotationSpeed * dt);

            let deltaRotaion = cc.Quat.fromEuler(cc.quat(),yRotation.x,yRotation.y,yRotation.z);

            let targetRotation = deltaRotaion.multiply(this.node.getRotation(cc.quat()));

            this.node.setRotation(Attractor.slerp(cc.quat(),this.node.getRotation(cc.quat()),targetRotation,50*dt));
       

    }
}
