"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch_1 = require("@elastic/elasticsearch");
const esClient = new elasticsearch_1.Client({ node: 'http://node01:9200' });
exports.default = esClient;
//# sourceMappingURL=elasticDb.js.map