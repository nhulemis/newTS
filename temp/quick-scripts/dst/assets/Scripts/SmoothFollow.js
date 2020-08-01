
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SmoothFollow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU21vb3RoRm9sbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWlEQztRQTVDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFVLEVBQUUsQ0FBQztRQUVuQix5QkFBbUIsR0FBVSxDQUFDLENBQUM7O0lBb0NuQyxDQUFDO3FCQWpEb0IsWUFBWTtJQWM3Qix3QkFBd0I7SUFFeEIsNkJBQU0sR0FBTjtRQUNJLGNBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixpQ0FBVSxHQUFWLFVBQVcsRUFBRTtRQUVULElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUIsSUFBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxFQUNoQztZQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksZ0JBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLGdCQUFjLEVBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDdkcsSUFBSSxDQUFDLG1CQUFtQixJQUFHLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTNFLElBQUksY0FBYyxHQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUcsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLGNBQWMsRUFBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUc1RyxDQUFDOztJQTlDTSx5QkFBWSxHQUFpQixJQUFJLENBQUM7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBR3ZCO1FBREMsUUFBUTtnREFDVTtJQVhGLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpRGhDO0lBQUQsbUJBQUM7Q0FqREQsQUFpREMsQ0FqRHlDLEVBQUUsQ0FBQyxTQUFTLEdBaURyRDtrQkFqRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQXR0cmFjdG9yIGZyb20gXCIuL0F0dHJhY3RvclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbW9vdGhDYW1lcmEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBzbW9vdGhDYW1lcmE6IFNtb290aENhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhbmV0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9mZnNldDpudW1iZXIgPSAyMDtcclxuXHJcbiAgICB0aW1lVG9SZXR1cm5Gb3J3YXJkOm51bWJlciA9IDE7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFNtb290aENhbWVyYS5zbW9vdGhDYW1lcmEgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsYXRlVXBkYXRlKGR0KXtcclxuXHJcbiAgICAgICAgbGV0IG5ld1BvcyA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLmFkZCggdGhpcy50YXJnZXQudXAubXVsU2VsZih0aGlzLm9mZnNldCkpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lVG9SZXR1cm5Gb3J3YXJkIDw9IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZm9yd2FyZCA9IHRoaXMudGFyZ2V0LmZvcndhcmQ7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRSb3RhdGlvbiA9IGNjLlF1YXQucm90YXRpb25UbyhjYy5xdWF0KCksIHRoaXMubm9kZS5mb3J3YXJkICwgZm9yd2FyZCkubXVsdGlwbHkodGhpcy5ub2RlLmdldFJvdGF0aW9uKGNjLnF1YXQoKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oQXR0cmFjdG9yLnNsZXJwKGNjLnF1YXQoKSwgdGhpcy5ub2RlLmdldFJvdGF0aW9uKGNjLnF1YXQoKSksdGFyZ2V0Um90YXRpb24sNSpkdCkpXHJcbiAgICAgICAgICAgIHRoaXMudGltZVRvUmV0dXJuRm9yd2FyZCs9IGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGdyYXZpdHlVcCA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uLnN1Yih0aGlzLnBsYW5ldC5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRSb3RhdGlvbiA9ICBjYy5xdWF0KCk7XHJcbiAgICAgICAgY2MuUXVhdC5yb3RhdGlvblRvKHRhcmdldFJvdGF0aW9uLCB0aGlzLm5vZGUudXAgLCBncmF2aXR5VXApLm11bHRpcGx5KHRoaXMubm9kZS5nZXRSb3RhdGlvbihjYy5xdWF0KCkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKEF0dHJhY3Rvci5zbGVycChjYy5xdWF0KCksIHRoaXMubm9kZS5nZXRSb3RhdGlvbihjYy5xdWF0KCkpLHRhcmdldFJvdGF0aW9uLDUwKmR0KSlcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==