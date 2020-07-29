"use strict";
cc._RF.push(module, 'cfaf7IajlFAj4b2CBai8+0N', 'Body');
// Scripts/Body.ts

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
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attractor = null;
        // LIFE-CYCLE CALLBACKS:
        _this.placeOnSurface = false;
        _this.speed = 30;
        return _this;
    }
    Body.prototype.onLoad = function () {
    };
    Body.prototype.start = function () {
        this.attractor = Attractor_1.default.attractor;
        var collider = this.getComponent(cc.Collider3D);
        collider.on('collision-enter', this.onCollisionEnter, this);
        collider.on('collision-exit', this.onCollisionExit, this);
        collider.on('collision-stay', this.onCollisionStay, this);
    };
    Body.prototype.onCollisionStay = function (event) {
    };
    Body.prototype.onCollisionExit = function (event) {
        this.placeOnSurface = false;
    };
    Body.prototype.onCollisionEnter = function (event) {
        this.placeOnSurface = true;
    };
    Body.prototype.update = function (dt) {
    };
    Body.prototype.lateUpdate = function (dt) {
        if (this.attractor != null) {
            this.attractor.Attact(this.node, dt);
        }
        else {
            cc.log("null instance");
        }
        if (this.placeOnSurface) {
            var position = this.node.position;
            var deltaDistance = this.node.forward.mul(this.speed * dt);
            this.node.position = position.sub(deltaDistance);
        }
    };
    __decorate([
        property
    ], Body.prototype, "speed", void 0);
    Body = __decorate([
        ccclass
    ], Body);
    return Body;
}(cc.Component));
exports.default = Body;

cc._RF.pop();