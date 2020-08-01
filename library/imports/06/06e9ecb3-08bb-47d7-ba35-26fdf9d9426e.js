"use strict";
cc._RF.push(module, '06e9eyzCLtH17o1Jv352UJu', 'SmoothFollow');
// Scripts/SmoothFollow.ts

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
var Attractor_1 = require("./Attractor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SmoothCamera = /** @class */ (function (_super) {
    __extends(SmoothCamera, _super);
    function SmoothCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.planet = null;
        _this.offset = 20;
        _this.timeToReturnForward = 1;
        return _this;
    }
    SmoothCamera_1 = SmoothCamera;
    // LIFE-CYCLE CALLBACKS:
    SmoothCamera.prototype.onLoad = function () {
        SmoothCamera_1.smoothCamera = this;
    };
    SmoothCamera.prototype.start = function () {
    };
    // update (dt) {}
    SmoothCamera.prototype.lateUpdate = function (dt) {
        var newPos = this.target.position.add(this.target.up.mulSelf(this.offset));
        this.node.setPosition(newPos);
        if (this.timeToReturnForward <= 1) {
            var forward = this.target.forward;
            var targetRotation_1 = cc.Quat.rotationTo(cc.quat(), this.node.forward, forward).multiply(this.node.getRotation(cc.quat()));
            this.node.setRotation(Attractor_1.default.slerp(cc.quat(), this.node.getRotation(cc.quat()), targetRotation_1, 5 * dt));
            this.timeToReturnForward += dt;
        }
        var gravityUp = this.target.position.sub(this.planet.position).normalize();
        var targetRotation = cc.quat();
        cc.Quat.rotationTo(targetRotation, this.node.up, gravityUp).multiply(this.node.getRotation(cc.quat()));
        this.node.setRotation(Attractor_1.default.slerp(cc.quat(), this.node.getRotation(cc.quat()), targetRotation, 50 * dt));
    };
    var SmoothCamera_1;
    SmoothCamera.smoothCamera = null;
    __decorate([
        property(cc.Node)
    ], SmoothCamera.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], SmoothCamera.prototype, "planet", void 0);
    __decorate([
        property
    ], SmoothCamera.prototype, "offset", void 0);
    SmoothCamera = SmoothCamera_1 = __decorate([
        ccclass
    ], SmoothCamera);
    return SmoothCamera;
}(cc.Component));
exports.default = SmoothCamera;

cc._RF.pop();