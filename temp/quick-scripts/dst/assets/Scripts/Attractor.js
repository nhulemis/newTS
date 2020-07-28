
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Attractor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXR0cmFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNENDO1FBekNHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQW1DM0IsQ0FBQztJQWxDRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4RCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEQsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRS9CLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVsQixJQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBQyxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXJELENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFROzJDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFUTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEM3QjtJQUFELGdCQUFDO0NBNUNELEFBNENDLENBNUNzQyxFQUFFLENBQUMsU0FBUyxHQTRDbEQ7a0JBNUNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQbGFuZXQ6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIEF0dGFjdCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJiQ2FyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5M0QpO1xyXG4gICAgICAgIGxldCByYlBsYW5ldCA9IHRoaXMuUGxhbmV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkzRCk7XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvbkNhciA9IG5ldyBjYy5WZWMzO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbihwb3NpdGlvbkNhcik7XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvblBsYW5ldCA9IG5ldyBjYy5WZWMzO1xyXG4gICAgICAgIHRoaXMuUGxhbmV0LmdldFBvc2l0aW9uKHBvc2l0aW9uUGxhbmV0KTtcclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHBvc2l0aW9uUGxhbmV0LnN1Yihwb3NpdGlvbkNhcik7XHJcblxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5tYWcoKTtcclxuXHJcbiAgICAgICAgY29uc3QgRyA9IDY2Ny40MDg7XHJcblxyXG4gICAgICAgIGxldCBmb3JjZU1hZyA9IEcgKiAocmJDYXIubWFzcyAqIHJiUGxhbmV0Lm1hc3MpLyBNYXRoLnBvdyhkaXN0YW5jZSwyKTtcclxuICAgICAgICBsZXQgZm9yY2UgPSBuZXcgY2MuVmVjMztcclxuICAgICAgICBkaXJlY3Rpb24ubXVsKGZvcmNlTWFnKS5ub3JtYWxpemUoZm9yY2UpO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkzRCkuYXBwbHlJbXB1bHNlKGZvcmNlLHBvc2l0aW9uUGxhbmV0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5BdHRhY3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=