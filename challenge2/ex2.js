var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Animal4Pattes = /** @class */ (function (_super) {
    __extends(Animal4Pattes, _super);
    function Animal4Pattes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animal4Pattes;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chat;
}(Animal4Pattes));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chien;
}(Animal4Pattes));
var Oiseau = /** @class */ (function (_super) {
    __extends(Oiseau, _super);
    function Oiseau() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oiseau;
}(Animal));
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poisson;
}(Animal));
var ChatEuropeen = /** @class */ (function (_super) {
    __extends(ChatEuropeen, _super);
    function ChatEuropeen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatEuropeen;
}(Chat));
var ChatChartreu = /** @class */ (function (_super) {
    __extends(ChatChartreu, _super);
    function ChatChartreu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatChartreu;
}(Chat));
var ChienTerreNeuve = /** @class */ (function (_super) {
    __extends(ChienTerreNeuve, _super);
    function ChienTerreNeuve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienTerreNeuve;
}(Chien));
var ChienMoonMoon = /** @class */ (function (_super) {
    __extends(ChienMoonMoon, _super);
    function ChienMoonMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienMoonMoon;
}(Chien));
var Mesange = /** @class */ (function (_super) {
    __extends(Mesange, _super);
    function Mesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mesange;
}(Oiseau));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Merle;
}(Oiseau));
var Thon = /** @class */ (function (_super) {
    __extends(Thon, _super);
    function Thon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Thon;
}(Poisson));
var Requin = /** @class */ (function (_super) {
    __extends(Requin, _super);
    function Requin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Requin;
}(Poisson));
var Asticot = /** @class */ (function (_super) {
    __extends(Asticot, _super);
    function Asticot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticot;
}(Animal));
function photographier(animal) {
    console.log('cheese......');
}
function miauler(chat) {
    console.log('miau..miau......');
}
function aboyer(chien) {
    console.log('aouu..aouu......');
}
function voler(oiseau) {
    console.log('vole..vole......');
}
function najer(poisson) {
    console.log('nage..nage......');
}
function caresser(animal4Pattes) {
    console.log('caresser..caresser......');
}
function nourrir(nourissable) {
    console.log('a table........');
}
var chatEuropeen = new ChatEuropeen();
var chienMoonMoon = new ChienMoonMoon();
nourrir(chatEuropeen);
miauler(chatEuropeen);
miauler(chienMoonMoon);
