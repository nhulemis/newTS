
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
                SmoothFollow_1.default.smoothCamera.timeToReturnForward = 2;
                this.rotation = 1;
                break;
            case cc.macro.KEY.d:
                console.log("d");
                SmoothFollow_1.default.smoothCamera.timeToReturnForward = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFDcEMsK0NBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBNERDO1FBM0RHLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFHcEIsbUJBQWEsR0FBVyxFQUFFLENBQUM7O0lBd0QvQixDQUFDO0lBdERHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELDRCQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsc0JBQVksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNO1NBRWI7SUFDTCxDQUFDO0lBQ0QsOEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ1osc0JBQVksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLHNCQUFZLENBQUMsWUFBWSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLEVBQUU7UUFHTCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBR2hILENBQUM7SUF2REQ7UUFEQyxRQUFRO3FEQUNrQjtJQUpWLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0RDlCO0lBQUQsaUJBQUM7Q0E1REQsQUE0REMsQ0E1RHVDLEVBQUUsQ0FBQyxTQUFTLEdBNERuRDtrQkE1RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQXR0cmFjdG9yIGZyb20gXCIuL0F0dHJhY3RvclwiO1xyXG5pbXBvcnQgU21vb3RoQ2FtZXJhIGZyb20gXCIuL1Ntb290aEZvbGxvd1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHJvdGF0aW9uOm51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3RhdGlvblNwZWVkOiBudW1iZXIgPSA3MDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbktleVVwKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBTbW9vdGhDYW1lcmEuc21vb3RoQ2FtZXJhLnRpbWVUb1JldHVybkZvcndhcmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIilcclxuICAgICAgICAgICAgICAgICAgICBTbW9vdGhDYW1lcmEuc21vb3RoQ2FtZXJhLnRpbWVUb1JldHVybkZvcndhcmQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgU21vb3RoQ2FtZXJhLnNtb290aENhbWVyYS50aW1lVG9SZXR1cm5Gb3J3YXJkID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbGF0ZVVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHlSb3RhdGlvbiA9IHRoaXMubm9kZS51cC5tdWwodGhpcy5yb3RhdGlvbiAqIHRoaXMucm90YXRpb25TcGVlZCAqIGR0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWx0YVJvdGFpb24gPSBjYy5RdWF0LmZyb21FdWxlcihjYy5xdWF0KCkseVJvdGF0aW9uLngseVJvdGF0aW9uLnkseVJvdGF0aW9uLnopO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldFJvdGF0aW9uID0gZGVsdGFSb3RhaW9uLm11bHRpcGx5KHRoaXMubm9kZS5nZXRSb3RhdGlvbihjYy5xdWF0KCkpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihBdHRyYWN0b3Iuc2xlcnAoY2MucXVhdCgpLHRoaXMubm9kZS5nZXRSb3RhdGlvbihjYy5xdWF0KCkpLHRhcmdldFJvdGF0aW9uLDUwKmR0KSk7XHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuIl19