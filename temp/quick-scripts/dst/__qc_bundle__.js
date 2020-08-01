
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Attractor');
require('./assets/Scripts/Body');
require('./assets/Scripts/Controller');
require('./assets/Scripts/SmoothFollow');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Body.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        this.placeOnSurface = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1REM7UUF0REcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1Qix3QkFBd0I7UUFFeEIsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFHaEMsV0FBSyxHQUFVLEVBQUUsQ0FBQzs7SUFnRHRCLENBQUM7SUE5Q0cscUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTlELENBQUM7SUFDRCw4QkFBZSxHQUFmLFVBQWdCLEtBQUs7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxFQUFFO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDekI7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO2FBQUk7WUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBRyxJQUFJLENBQUMsY0FBYyxFQUN0QjtZQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEQ7SUFHTCxDQUFDO0lBL0NEO1FBREMsUUFBUTt1Q0FDUztJQVBELElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F1RHhCO0lBQUQsV0FBQztDQXZERCxBQXVEQyxDQXZEaUMsRUFBRSxDQUFDLFNBQVMsR0F1RDdDO2tCQXZEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBBdHRyYWN0b3IgZnJvbSBcIi4vQXR0cmFjdG9yXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgYXR0cmFjdG9yOiBBdHRyYWN0b3IgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgcGxhY2VPblN1cmZhY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOm51bWJlciA9IDMwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdG9yID0gQXR0cmFjdG9yLmF0dHJhY3RvcjtcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcjNEKTtcclxuICAgICAgICBjb2xsaWRlci5vbignY29sbGlzaW9uLWVudGVyJywgdGhpcy5vbkNvbGxpc2lvbkVudGVyLCB0aGlzKTtcclxuICAgICAgICBjb2xsaWRlci5vbignY29sbGlzaW9uLWV4aXQnLCB0aGlzLm9uQ29sbGlzaW9uRXhpdCwgdGhpcyk7XHJcbiAgICAgICAgY29sbGlkZXIub24oJ2NvbGxpc2lvbi1zdGF5JywgdGhpcy5vbkNvbGxpc2lvblN0YXksIHRoaXMpO1xyXG5cclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uU3RheShldmVudCkge1xyXG4gICAgICAgIHRoaXMucGxhY2VPblN1cmZhY2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIG9uQ29sbGlzaW9uRXhpdChldmVudCkge1xyXG4gICAgICAgIHRoaXMucGxhY2VPblN1cmZhY2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZU9uU3VyZmFjZSA9IHRydWU7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKHRoaXMuYXR0cmFjdG9yICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3Rvci5BdHRhY3QodGhpcy5ub2RlLGR0KTtcclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIm51bGwgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBsYWNlT25TdXJmYWNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgZGVsdGFEaXN0YW5jZSA9IHRoaXMubm9kZS5mb3J3YXJkLm11bCh0aGlzLnNwZWVkICogZHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbi5zdWIoZGVsdGFEaXN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.collider = null;
        _this.gravity = -900;
        return _this;
    }
    Attractor_1 = Attractor;
    Attractor.prototype.Attact = function (object, dt) {
        var rbCar = object.getComponent(cc.RigidBody3D);
        var gravityUp = object.position.sub(this.node.position).normalize();
        rbCar.applyImpulse(gravityUp.mul(this.gravity), cc.Vec3.ZERO);
        this.rotateBody(object, dt);
    };
    Attractor.prototype.onLoad = function () {
        Attractor_1.attractor = this;
    };
    Attractor.prototype.start = function () {
        cc.director.getPhysics3DManager().enabled = true;
        this.collider = this.getComponent(cc.SphereCollider3D);
    };
    Attractor.prototype.update = function (dt) {
        //this.Attact();
    };
    Attractor.prototype.rotateBody = function (obj, dt) {
        //node.setRotation(cc.Quat.lerp(null,)
        //Vector3 gravityUp = (body.position - transform.position).normalized;
        var gravityUp = obj.position.sub(this.node.position).normalize();
        //Quaternion targetRotation = Quaternion.FromToRotation(body.transform.up, gravityUp) * body.rotation;
        var targetRotation = cc.quat();
        cc.Quat.rotationTo(targetRotation, obj.up, gravityUp).multiply(obj.getRotation(cc.quat()));
        obj.setRotation(Attractor_1.slerp(cc.quat(), obj.getRotation(cc.quat()), targetRotation, 50 * dt));
    };
    /**
     * !#zh 四元数球面插值
     * !#en Spherical quaternion interpolation
     * @typescript
     * slerp<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2, t: number): Out
     * @static
     */
    Attractor.slerp = function (out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        var scale0 = 0;
        var scale1 = 0;
        // calc cosine
        var cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
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
            var omega = Math.acos(cosom);
            var sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        }
        else {
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
    };
    Attractor.prototype.placeOnSurface = function (obj) {
        obj.position = obj.position.add(obj.forward.mul(this.node.scaleX * this.collider.radius * 0.01));
    };
    var Attractor_1;
    Attractor.attractor = null;
    Attractor = Attractor_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXR0cmFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBaUdDO1FBN0ZHLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBRXBDLGFBQU8sR0FBVyxDQUFDLEdBQUcsQ0FBQzs7SUEyRjNCLENBQUM7a0JBakdvQixTQUFTO0lBUTFCLDBCQUFNLEdBQU4sVUFBTyxNQUFlLEVBQUcsRUFBVTtRQUUvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXBFLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsMEJBQU0sR0FBTjtRQUVJLFdBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLGdCQUFnQjtJQUNwQixDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLEdBQVksRUFBRyxFQUFXO1FBRWpDLHNDQUFzQztRQUV0QyxzRUFBc0U7UUFDdEUsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqRSxzR0FBc0c7UUFDdEcsSUFBSSxjQUFjLEdBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFHLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHNUYsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLGNBQWMsRUFBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sZUFBSyxHQUFaLFVBQ0UsR0FBUSxFQUFFLENBQWEsRUFBRSxDQUFhLEVBQUUsQ0FBUztRQUNsRCxjQUFjO1FBQ2Qsd0RBQXdEO1FBRXhELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVmLGNBQWM7UUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsOEJBQThCO1FBQzlCLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNiLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxRQUFRLEVBQUU7WUFDMUIsd0JBQXdCO1lBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDN0MsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN4QzthQUFNO1lBQ0gsNkNBQTZDO1lBQzdDLDJDQUEyQztZQUMzQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCx5QkFBeUI7UUFDekIsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBYyxHQUFkLFVBQWUsR0FBWTtRQUV2QixHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQzs7SUE5Rk0sbUJBQVMsR0FBYyxJQUFJLENBQUM7SUFGbEIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWlHN0I7SUFBRCxnQkFBQztDQWpHRCxBQWlHQyxDQWpHc0MsRUFBRSxDQUFDLFNBQVMsR0FpR2xEO2tCQWpHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhdHRyYWN0b3I6IEF0dHJhY3RvciA9IG51bGw7XHJcblxyXG4gICAgY29sbGlkZXI6Y2MuU3BoZXJlQ29sbGlkZXIzRCA9IG51bGw7XHJcblxyXG4gICAgZ3Jhdml0eTogbnVtYmVyID0gLTkwMDtcclxuXHJcbiAgICBBdHRhY3Qob2JqZWN0OiBjYy5Ob2RlICwgZHQ6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBsZXQgcmJDYXIgPSBvYmplY3QuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keTNEKTtcclxuICAgICAgICBsZXQgZ3Jhdml0eVVwID0gb2JqZWN0LnBvc2l0aW9uLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICByYkNhci5hcHBseUltcHVsc2UoZ3Jhdml0eVVwLm11bCh0aGlzLmdyYXZpdHkpLGNjLlZlYzMuWkVSTyk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRlQm9keShvYmplY3QsZHQpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBBdHRyYWN0b3IuYXR0cmFjdG9yID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljczNETWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcGhlcmVDb2xsaWRlcjNEKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy90aGlzLkF0dGFjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZUJvZHkob2JqOiBjYy5Ob2RlICwgZHQgOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy9ub2RlLnNldFJvdGF0aW9uKGNjLlF1YXQubGVycChudWxsLClcclxuXHJcbiAgICAgICAgLy9WZWN0b3IzIGdyYXZpdHlVcCA9IChib2R5LnBvc2l0aW9uIC0gdHJhbnNmb3JtLnBvc2l0aW9uKS5ub3JtYWxpemVkO1xyXG4gICAgICAgIGxldCBncmF2aXR5VXAgPSBvYmoucG9zaXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vUXVhdGVybmlvbiB0YXJnZXRSb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbVRvUm90YXRpb24oYm9keS50cmFuc2Zvcm0udXAsIGdyYXZpdHlVcCkgKiBib2R5LnJvdGF0aW9uO1xyXG4gICAgICAgIGxldCB0YXJnZXRSb3RhdGlvbiA9ICBjYy5xdWF0KCk7XHJcbiAgICAgICAgY2MuUXVhdC5yb3RhdGlvblRvKHRhcmdldFJvdGF0aW9uLCBvYmoudXAgLCBncmF2aXR5VXApLm11bHRpcGx5KG9iai5nZXRSb3RhdGlvbihjYy5xdWF0KCkpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgb2JqLnNldFJvdGF0aW9uKEF0dHJhY3Rvci5zbGVycChjYy5xdWF0KCksb2JqLmdldFJvdGF0aW9uKGNjLnF1YXQoKSksdGFyZ2V0Um90YXRpb24sNTAqZHQpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogISN6aCDlm5vlhYPmlbDnkIPpnaLmj5LlgLxcclxuICAgICAqICEjZW4gU3BoZXJpY2FsIHF1YXRlcm5pb24gaW50ZXJwb2xhdGlvblxyXG4gICAgICogQHR5cGVzY3JpcHRcclxuICAgICAqIHNsZXJwPE91dCBleHRlbmRzIElRdWF0TGlrZSwgUXVhdExpa2VfMSBleHRlbmRzIElRdWF0TGlrZSwgUXVhdExpa2VfMiBleHRlbmRzIElRdWF0TGlrZT4ob3V0OiBPdXQsIGE6IFF1YXRMaWtlXzEsIGI6IFF1YXRMaWtlXzIsIHQ6IG51bWJlcik6IE91dFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICAgICBzdGF0aWMgc2xlcnA8T3V0IGV4dGVuZHMgSVF1YXRMaWtlLCBRdWF0TGlrZV8xIGV4dGVuZHMgSVF1YXRMaWtlLCBRdWF0TGlrZV8yIGV4dGVuZHMgSVF1YXRMaWtlPlxyXG4gICAgICAgIChvdXQ6IE91dCwgYTogUXVhdExpa2VfMSwgYjogUXVhdExpa2VfMiwgdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gYmVuY2htYXJrczpcclxuICAgICAgICAvLyAgICBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXNsZXJwLWltcGxlbWVudGF0aW9uc1xyXG5cclxuICAgICAgICBsZXQgc2NhbGUwID0gMDtcclxuICAgICAgICBsZXQgc2NhbGUxID0gMDtcclxuXHJcbiAgICAgICAgLy8gY2FsYyBjb3NpbmVcclxuICAgICAgICBsZXQgY29zb20gPSBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLnogKyBhLncgKiBiLnc7XHJcbiAgICAgICAgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXHJcbiAgICAgICAgaWYgKGNvc29tIDwgMC4wKSB7XHJcbiAgICAgICAgICAgIGNvc29tID0gLWNvc29tO1xyXG4gICAgICAgICAgICBiLnggPSAtYi54O1xyXG4gICAgICAgICAgICBiLnkgPSAtYi55O1xyXG4gICAgICAgICAgICBiLnogPSAtYi56O1xyXG4gICAgICAgICAgICBiLncgPSAtYi53O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYWxjdWxhdGUgY29lZmZpY2llbnRzXHJcbiAgICAgICAgaWYgKCgxLjAgLSBjb3NvbSkgPiAwLjAwMDAwMSkge1xyXG4gICAgICAgICAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcclxuICAgICAgICAgICAgY29uc3Qgb21lZ2EgPSBNYXRoLmFjb3MoY29zb20pO1xyXG4gICAgICAgICAgICBjb25zdCBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTtcclxuICAgICAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XHJcbiAgICAgICAgICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXHJcbiAgICAgICAgICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cclxuICAgICAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcclxuICAgICAgICAgICAgc2NhbGUxID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xyXG4gICAgICAgIG91dC54ID0gc2NhbGUwICogYS54ICsgc2NhbGUxICogYi54O1xyXG4gICAgICAgIG91dC55ID0gc2NhbGUwICogYS55ICsgc2NhbGUxICogYi55O1xyXG4gICAgICAgIG91dC56ID0gc2NhbGUwICogYS56ICsgc2NhbGUxICogYi56O1xyXG4gICAgICAgIG91dC53ID0gc2NhbGUwICogYS53ICsgc2NhbGUxICogYi53O1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlT25TdXJmYWNlKG9iajogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICBvYmoucG9zaXRpb24gPSBvYmoucG9zaXRpb24uYWRkKG9iai5mb3J3YXJkLm11bCh0aGlzLm5vZGUuc2NhbGVYICogdGhpcy5jb2xsaWRlci5yYWRpdXMgKiAwLjAxKSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51c0cMJY59JUo1T47Y+31/8', 'Controller');
// Scripts/Controller.ts

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
var SmoothFollow_1 = require("./SmoothFollow");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rotation = 0;
        _this.rotationSpeed = 70;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Controller.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Controller.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                this.rotation = 0;
                SmoothFollow_1.default.smoothCamera.timeToReturnForward = 0;
                break;
        }
    };
    Controller.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log("a");
                this.rotation = 1;
                break;
            case cc.macro.KEY.d:
                console.log("d");
                this.rotation = -1;
                break;
        }
    };
    Controller.prototype.start = function () {
    };
    Controller.prototype.update = function (dt) {
    };
    Controller.prototype.lateUpdate = function (dt) {
        var yRotation = this.node.up.mul(this.rotation * this.rotationSpeed * dt);
        var deltaRotaion = cc.Quat.fromEuler(cc.quat(), yRotation.x, yRotation.y, yRotation.z);
        var targetRotation = deltaRotaion.multiply(this.node.getRotation(cc.quat()));
        this.node.setRotation(Attractor_1.default.slerp(cc.quat(), this.node.getRotation(cc.quat()), targetRotation, 50 * dt));
    };
    __decorate([
        property
    ], Controller.prototype, "rotationSpeed", void 0);
    Controller = __decorate([
        ccclass
    ], Controller);
    return Controller;
}(cc.Component));
exports.default = Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFDcEMsK0NBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBMERDO1FBekRHLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFHcEIsbUJBQWEsR0FBVyxFQUFFLENBQUM7O0lBc0QvQixDQUFDO0lBcERHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELDRCQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsc0JBQVksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNO1NBRWI7SUFDTCxDQUFDO0lBQ0QsOEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1NBRWI7SUFDTCxDQUFDO0lBRUQsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQVEsRUFBRTtJQUdWLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsRUFBRTtRQUdMLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFMUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEYsSUFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxjQUFjLEVBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFHaEgsQ0FBQztJQXJERDtRQURDLFFBQVE7cURBQ2tCO0lBSlYsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBEOUI7SUFBRCxpQkFBQztDQTFERCxBQTBEQyxDQTFEdUMsRUFBRSxDQUFDLFNBQVMsR0EwRG5EO2tCQTFEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBBdHRyYWN0b3IgZnJvbSBcIi4vQXR0cmFjdG9yXCI7XHJcbmltcG9ydCBTbW9vdGhDYW1lcmEgZnJvbSBcIi4vU21vb3RoRm9sbG93XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcm90YXRpb246bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvdGF0aW9uU3BlZWQ6IG51bWJlciA9IDcwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIFNtb290aENhbWVyYS5zbW9vdGhDYW1lcmEudGltZVRvUmV0dXJuRm9yd2FyZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB5Um90YXRpb24gPSB0aGlzLm5vZGUudXAubXVsKHRoaXMucm90YXRpb24gKiB0aGlzLnJvdGF0aW9uU3BlZWQgKiBkdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVsdGFSb3RhaW9uID0gY2MuUXVhdC5mcm9tRXVsZXIoY2MucXVhdCgpLHlSb3RhdGlvbi54LHlSb3RhdGlvbi55LHlSb3RhdGlvbi56KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRSb3RhdGlvbiA9IGRlbHRhUm90YWlvbi5tdWx0aXBseSh0aGlzLm5vZGUuZ2V0Um90YXRpb24oY2MucXVhdCgpKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oQXR0cmFjdG9yLnNsZXJwKGNjLnF1YXQoKSx0aGlzLm5vZGUuZ2V0Um90YXRpb24oY2MucXVhdCgpKSx0YXJnZXRSb3RhdGlvbiw1MCpkdCkpO1xyXG4gICAgICAgXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
