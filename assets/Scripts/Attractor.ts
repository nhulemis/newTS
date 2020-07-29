// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
@ccclass
export default class Attractor extends cc.Component {

    static attractor: Attractor = null;

    collider:cc.SphereCollider3D = null;

    gravity: number = -100;

    Attact(object: cc.Node , dt: number)
    {
        let rbCar = object.getComponent(cc.RigidBody3D);
        let gravityUp = object.position.sub(this.node.position).normalize();

        rbCar.applyImpulse(gravityUp.mul(this.gravity),cc.Vec3.ZERO);

        this.rotateBody(object,dt);
    }
    onLoad()
    {
        Attractor.attractor = this;
    }

    start () {
        cc.director.getPhysics3DManager().enabled = true;
        this.collider = this.getComponent(cc.SphereCollider3D);
    }

    update (dt) {
        //this.Attact();
    }

    rotateBody(obj: cc.Node , dt : number)
    {
        //node.setRotation(cc.Quat.lerp(null,)

        //Vector3 gravityUp = (body.position - transform.position).normalized;
        let gravityUp = obj.position.sub(this.node.position).normalize();

        //Quaternion targetRotation = Quaternion.FromToRotation(body.transform.up, gravityUp) * body.rotation;
        let targetRotation =  cc.quat();
        cc.Quat.rotationTo(targetRotation, obj.up , gravityUp).multiply(obj.getRotation(cc.quat()));

        
        obj.setRotation(Attractor.slerp(cc.quat(),obj.getRotation(cc.quat()),targetRotation,50*dt))
    }

    /**
     * !#zh 四元数球面插值
     * !#en Spherical quaternion interpolation
     * @typescript
     * slerp<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2, t: number): Out
     * @static
     */
       static slerp<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>
        (out: Out, a: QuatLike_1, b: QuatLike_2, t: number) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations

        let scale0 = 0;
        let scale1 = 0;

        // calc cosine
        let cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
        // adjust signs (if necessary)
        if (cosom < 0.0) {
            cosom = -cosom;
            b.x = -b.x;
            b.y = -b.y;
            b.z = -b.z;
            b.w = -b.w;
        }
        // calculate coefficients
        if ((1.0 - cosom) > 0.000001) {
            // standard case (slerp)
            const omega = Math.acos(cosom);
            const sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
        }
        // calculate final values
        out.x = scale0 * a.x + scale1 * b.x;
        out.y = scale0 * a.y + scale1 * b.y;
        out.z = scale0 * a.z + scale1 * b.z;
        out.w = scale0 * a.w + scale1 * b.w;

        return out;
    }

    placeOnSurface(obj: cc.Node)
    {
        obj.position = obj.position.add(obj.forward.mul(this.node.scaleX * this.collider.radius * 0.01));
    }
}
