"use strict";
cc._RF.push(module, '989ecQtkcBPcqU47gKBlmdF', 'Attractor');
// Scripts/Attractor.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Attractor = /** @class */ (function (_super) {
    __extends(Attractor, _super);
    function Attractor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.Planet = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Attractor.prototype.Attact = function () {
        var rbCar = this.getComponent(cc.RigidBody3D);
        var rbPlanet = this.Planet.getComponent(cc.RigidBody3D);
        var positionCar = new cc.Vec3;
        this.node.getPosition(positionCar);
        var positionPlanet = new cc.Vec3;
        this.Planet.getPosition(positionPlanet);
        var direction = positionPlanet.sub(positionCar);
        var distance = direction.mag();
        var G = 667.408;
        var forceMag = G * (rbCar.mass * rbPlanet.mass) / Math.pow(distance, 2);
        var force = new cc.Vec3;
        direction.mul(forceMag).normalize(force);
        this.getComponent(cc.RigidBody3D).applyImpulse(force, positionPlanet);
    };
    Attractor.prototype.start = function () {
        cc.director.getPhysics3DManager().enabled = true;
    };
    Attractor.prototype.update = function (dt) {
        this.Attact();
    };
    __decorate([
        property(cc.Label)
    ], Attractor.prototype, "label", void 0);
    __decorate([
        property
    ], Attractor.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Attractor.prototype, "Planet", void 0);
    Attractor = __decorate([
        ccclass
    ], Attractor);
    return Attractor;
}(cc.Component));
exports.default = Attractor;

cc._RF.pop();