import express from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import router from './routes';

// Configuration
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.disable('x-powered-by'); // nginx ile kullanılacak
app.use(express.urlencoded({ extended: true }));
app.use(compression()); // levelleri var araştır. [{level:9}]
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(router);

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
