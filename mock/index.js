import mockjs from 'mockjs';

export default {
  'GET /api/getData': {
    id: 0,
    name: 'demo',
    age: 12,
  },
  '/api/index': {
    id: 1,
    name: 'Tom',
    age: 18,
  },
  'POST /api/person': {
    id: 2,
    name: 'Lili',
    age: 22,
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
