"use strict";
cc._RF.push(module, '8e931Kwsk1CbZaEy4qlNCtF', 'BlockScript');
// script/BlockScript.ts

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
var BlockScript = /** @class */ (function (_super) {
    __extends(BlockScript, _super);
    function BlockScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockNode = null;
        _this.num = null;
        _this.spBlock = null;
        _this.gameManager = null;
        return _this;
    }
    BlockScript.prototype.onLoad = function () {
        // this.setValue(2);
    };
    BlockScript.prototype.removeCube = function () {
        this.node.active = false;
        // this.node.destroy();
        // this.gameManager.Pool1.put(this.node);
    };
    //   removeCube() {
    // this.blockNode.active = false;
    //     this.gameManager.Pool1.put(this.node);
    // }
    BlockScript.prototype.setValue = function (num) {
        this.num.string = num.toString();
    };
    BlockScript.prototype.setNum = function (num, idx) {
        this.number = num;
        this.index = idx;
        var cubeSprite = this.node.getComponent(cc.Sprite);
        switch (num) {
            case 2:
                {
                    this.spBlock.spriteFrame = this.cubeArray[0];
                    // cubeSprite.spriteFrame = this.cubeArray[0];
                    this.setValue(2);
                }
                break;
            case 4:
                {
                    this.spBlock.spriteFrame = this.cubeArray[1];
                    // cubeSprite.spriteFrame = this.cubeArray[1];
                    this.setValue(4);
                }
                break;
            case 8:
                {
                    this.spBlock.spriteFrame = this.cubeArray[2];
                    // cubeSprite = this.cubeArray[2];
                    this.setValue(8);
                }
                break;
            case 16:
                {
                    this.spBlock.spriteFrame = this.cubeArray[3];
                    // cubeSprite = this.cubeArray[3];
                    this.setValue(16);
                }
                break;
            case 32:
                {
                    this.spBlock.spriteFrame = this.cubeArray[4];
                    // cubeSprite = this.cubeArray[4];
                    this.setValue(32);
                }
                break;
            case 64:
                {
                    this.spBlock.spriteFrame = this.cubeArray[5];
                    // cubeSprite = this.cubeArray[5];
                    this.setValue(64);
                }
                break;
            case 128:
                {
                    this.spBlock.spriteFrame = this.cubeArray[6];
                    // cubeSprite = this.cubeArray[6];
                    this.setValue(128);
                }
                break;
            case 256:
                {
                    this.spBlock.spriteFrame = this.cubeArray[7];
                    // cubeSprite = this.cubeArray[7];
                    this.setValue(256);
                }
                break;
            case 512:
                {
                    this.spBlock.spriteFrame = this.cubeArray[8];
                    // cubeSprite = this.cubeArray[8];
                    this.setValue(512);
                }
                break;
            case 1024:
                {
                    cubeSprite = this.cubeArray[9];
                    this.setValue(1024);
                }
                break;
            case 2048:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(2048);
                }
                break;
            case 4096:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(4096);
                }
                break;
            case 8192:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(8192);
                }
                break;
            case 16384:
                {
                    cubeSprite = this.cubeArray[0];
                    this.setValue(16384);
                }
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], BlockScript.prototype, "blockNode", void 0);
    __decorate([
        property(cc.Label)
    ], BlockScript.prototype, "num", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BlockScript.prototype, "cubeArray", void 0);
    __decorate([
        property(cc.Sprite)
    ], BlockScript.prototype, "spBlock", void 0);
    BlockScript = __decorate([
        ccclass
    ], BlockScript);
    return BlockScript;
}(cc.Component));
exports.default = BlockScript;

cc._RF.pop();