import { Client } from '@elastic/elasticsearch';

const esClient = new Client({ node: 'http://node01:9200' });

export default esClient;
