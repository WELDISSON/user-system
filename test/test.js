var request = require('supertest');
var assert = require('chai').assert;
var Joi = require('joi');
const url = 'http://localhost:3000';
const schema = require('./schema');
const faker = require('faker');
faker.locale = "pt_BR";

describe('UserAPI Tests', () => {
  it('/register POST - 200', done => {
    var payload = {
        'name': faker.internet.userName(),
        'password': '1234',
        'email': faker.internet.email(),
        'cpf': '12345689010',
        'endereco': faker.address.streetAddress()
    };

    request(url)
      .post('/register')
      .send(payload)
      .set('Content-type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        let actual = res.body;
        err = Joi.validate(actual, schema.register_Schema(),
                { abortEarly: false, allowUnknown: false },
                ).error;
        assert.equal(err, null);
        assert.equal(res.status, 200);
        done()
      });
  });
});