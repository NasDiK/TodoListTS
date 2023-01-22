const ENV = 'develop';

import config from './config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(config[ENV].PORT, () => {
  console.log(`server is listening on ${config[ENV].PORT}`);
});