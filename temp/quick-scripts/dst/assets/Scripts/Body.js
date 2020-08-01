
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
            // this.node.position = position.sub(deltaDistance);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1REM7UUF0REcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1Qix3QkFBd0I7UUFFeEIsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFHaEMsV0FBSyxHQUFVLEVBQUUsQ0FBQzs7SUFnRHRCLENBQUM7SUE5Q0cscUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTlELENBQUM7SUFDRCw4QkFBZSxHQUFmLFVBQWdCLEtBQUs7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxFQUFFO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDekI7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO2FBQUk7WUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBRyxJQUFJLENBQUMsY0FBYyxFQUN0QjtZQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVELG9EQUFvRDtTQUN0RDtJQUdMLENBQUM7SUEvQ0Q7UUFEQyxRQUFRO3VDQUNTO0lBUEQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVEeEI7SUFBRCxXQUFDO0NBdkRELEFBdURDLENBdkRpQyxFQUFFLENBQUMsU0FBUyxHQXVEN0M7a0JBdkRvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEF0dHJhY3RvciBmcm9tIFwiLi9BdHRyYWN0b3JcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBhdHRyYWN0b3I6IEF0dHJhY3RvciA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBwbGFjZU9uU3VyZmFjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6bnVtYmVyID0gMzA7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0b3IgPSBBdHRyYWN0b3IuYXR0cmFjdG9yO1xyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyM0QpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9uKCdjb2xsaXNpb24tZW50ZXInLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9uKCdjb2xsaXNpb24tZXhpdCcsIHRoaXMub25Db2xsaXNpb25FeGl0LCB0aGlzKTtcclxuICAgICAgICBjb2xsaWRlci5vbignY29sbGlzaW9uLXN0YXknLCB0aGlzLm9uQ29sbGlzaW9uU3RheSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25TdGF5KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZU9uU3VyZmFjZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgb25Db2xsaXNpb25FeGl0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZU9uU3VyZmFjZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnBsYWNlT25TdXJmYWNlID0gdHJ1ZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYodGhpcy5hdHRyYWN0b3IgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdG9yLkF0dGFjdCh0aGlzLm5vZGUsZHQpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgY2MubG9nKFwibnVsbCBpbnN0YW5jZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxhY2VPblN1cmZhY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBkZWx0YURpc3RhbmNlID0gdGhpcy5ub2RlLmZvcndhcmQubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb24uc3ViKGRlbHRhRGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuIl19