"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.UserContextProvider = exports.UserContext = void 0;
var react_1 = __importStar(require("react"));
var anonUser = {
    name: "Invitado",
    email: ""
};
exports.UserContext = react_1.createContext(anonUser); //add a default value when no provider is in the tree
var UserContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(anonUser), user = _b[0], setUser = _b[1];
    return (<exports.UserContext.Provider value={[user, setUser]}>
            {children}
        </exports.UserContext.Provider>);
};
exports.UserContextProvider = UserContextProvider;
