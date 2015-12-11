//process.env.NODE_ENV = 'dev';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = ('../server/app');
var should = chai.should();
chai.use(chaiHttp);

console.log(server);

describe('main route', function () {
    it('should have a status code of 200', function (done) {
        console.log('here')
        chai.request(server)
            .get('/test')
            .end(function (err, res) {
                console.log(err, res);
                res.should.have.status(200);
                done();
            });
    });
});