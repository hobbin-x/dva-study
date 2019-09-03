import dva from 'dva';
import './index.css';
import Count from './models/count';

// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
    // count: 2,
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(Count);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
