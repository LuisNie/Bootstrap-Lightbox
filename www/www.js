/**
 * Created by LuyuanNie on 3/17/16.
 */
var app = require('../app');
app.set('port',((process.env.PORT )||5000));

app.listen(app.get('port'),function(){

});