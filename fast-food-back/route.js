const router = express.Router();
app.use(router);

//products
Router.route('/products')
 .get(myGetFunction)
 .post(myPostFunction)
 .delete(myDeleteFunction)
