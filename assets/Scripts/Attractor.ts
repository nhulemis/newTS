// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
@ccclass
export default class Attractor extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    Planet: cc.Node = null; 
    // LIFE-CYCLE CALLBACKS:

    Attact()
    {
        let rbCar = this.getComponent(cc.RigidBody3D);
        let rbPlanet = this.Planet.getComponent(cc.RigidBody3D);

        let positionCar = new cc.Vec3;
        this.node.getPosition(positionCar);

        let positionPlanet = new cc.Vec3;
        this.Planet.getPosition(positionPlanet);

        let direction = positionPlanet.sub(positionCar);

        let distance = direction.mag();

        const G = 667.408;

        let forceMag = G * (rbCar.mass * rbPlanet.mass)/ Math.pow(distance,2);
        let force = new cc.Vec3;
        direction.mul(forceMag).normalize(force);

        this.getComponent(cc.RigidBody3D).applyImpulse(force,positionPlanet);
    }

    start () {
        cc.director.getPhysics3DManager().enabled = true;

    }

    update (dt) {
        this.Attact();
    }
}
