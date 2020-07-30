// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Attractor from "./Attractor";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Body extends cc.Component {
    attractor: Attractor = null;
    // LIFE-CYCLE CALLBACKS:

    placeOnSurface: boolean = false;

    @property
    speed:number = 30;

    onLoad () {
        
    }

    start () {
        this.attractor = Attractor.attractor;
        let collider = this.getComponent(cc.Collider3D);
        collider.on('collision-enter', this.onCollisionEnter, this);
        collider.on('collision-exit', this.onCollisionExit, this);
        collider.on('collision-stay', this.onCollisionStay, this);

    }
    onCollisionStay(event) {
        this.placeOnSurface = true;
    }
   
    onCollisionExit(event) {
        this.placeOnSurface = false;
    }

    onCollisionEnter(event) {
        this.placeOnSurface = true;        
    }

    update (dt) {

    }

    lateUpdate(dt){
        if(this.attractor != null)
        {
            this.attractor.Attact(this.node,dt);
        }else{

            cc.log("null instance");
        }

        if(this.placeOnSurface)
        {
            let position = this.node.position;
            let deltaDistance = this.node.forward.mul(this.speed * dt);
            this.node.position = position.sub(deltaDistance);
        }
        

    }
}
