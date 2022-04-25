"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connect_1 = __importDefault(require("./db/connect"));
const posts_js_1 = __importDefault(require("./routes/posts.js"));
// importy routes
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json({
    limit: '100mb'
}));
app.use(express_1.default.text({
    limit: '100mb',
}));
app.use(express_1.default.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1000000
}));
app.use((0, cors_1.default)());
// routes
app.use('/posts', posts_js_1.default);
app.get("/", (req, res) => {
    res.send("Hello to Memes API");
});
// app.use(errorHandlerMiddleware);
// inicjalizacja serwera
const PORT = process.env["PORT"] || 5000;
const mongoDB = process.env["MONGO_URI"];
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(mongoDB);
        app.listen(PORT);
        console.log(`Server is running on port: ${PORT}...`);
    }
    catch (error) {
        console.log(error);
    }
});
start();
