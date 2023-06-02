"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = __importStar(require("./Group"));
const Point_1 = require("./Point");
const point = new Point_1.Point(1, 2);
const group = new Group_1.default(1, 'Chanchito feliz');
console.log(Point_1.PUNTITO);
console.log(Group_1.defaultGroups);
const G = __importStar(require("./Group"));
const gg = new G.default(9, 'chanchito infeliz');
console.log(G.defaultGroups);
const Chanchitos_1 = require("./Animales/Chanchitos");
const Caballitos_1 = require("./Animales/Caballitos");
const Animales_1 = require("./Animales/Animales");
console.log(Animales_1.Animales, Caballitos_1.Caballitos, Chanchitos_1.Chanchitos);
//# sourceMappingURL=index.js.map