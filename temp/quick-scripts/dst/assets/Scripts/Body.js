
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