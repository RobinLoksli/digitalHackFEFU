const
    express = require('express'),
    cors    = require('cors'),
    morgan  = require('morgan');

const 
    config = require('../config');

const 
    app  = express(),
    port = config.app.port || process.env.port;

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/index',    require('./routers/index.js'));
app.use('/api/raiting',  require('./routers/raiting.js'));
app.use('/api/product',  require('./routers/product.js'));
app.use('/api/order', 	 require('./routers/order.js'));
app.use('/api/delivery', require('./routers/delivery.js'));

app.listen(port, () => console.log(`server has been started on port ${3000}`));