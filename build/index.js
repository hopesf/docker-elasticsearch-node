"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// Configuration
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
const app = (0, express_1.default)();
app.disable('x-powered-by'); // nginx ile kullanılacak
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)()); // levelleri var araştır. [{level:9}]
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${process.env.PORT}`);
});
// nginx docker ile kullanılacak ve
// dockera nnginx ekle ve nginx.conf dosyasını ile x-powered-by kaldır.
// nginx e bakılacak detaylıca
// docker ile çoklu port kullanımı yapılabiliyor.
// kubernets otomatize ediyor loadbanacing yapıyor.
// kubernets çekirdeği linux ve centos da yapıyı kendin yüklemen gerekiyor.
//# sourceMappingURL=index.js.map