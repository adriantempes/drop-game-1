"use strict";
cc._RF.push(module, 'b4a74KXyspB7LSczkkWpIU2', 'transition2');
// script/transition2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var transition2 = /** @class */ (function (_super) {
    __extends(transition2, _super);
    function transition2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    transition2.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
    };
    transition2.prototype.Next_Screen = function () {
        var _this = this;
        cc.tween(this.node)
            .to(1, { position: cc.v3(640, 360, 0) }, { easing: 'cubicInOut' })
            .call(function () { _this.Load_Scene(); })
            .to(1, { position: cc.v3(-640, 360, 0) }, { easing: 'cubicInOut' })
            .start;
    };
    transition2.prototype.Load_Scene = function () {
        cc.director.loadScene("endgame");
    };
    transition2 = __decorate([
        ccclass
    ], transition2);
    return transition2;
}(cc.Component));
exports.default = transition2;

cc._RF.pop();