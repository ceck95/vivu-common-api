/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-20T11:20:15+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-20T11:37:22+07:00
 */


'use strict';

const Joi = require('joi');

let requestRegisterCustomer = Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    postalCode: Joi.string(),
    state: Joi.string(),
    countryCode: Joi.string()
  }),
  response = Joi.object({
    customerId: Joi.number(),
    type: Joi.string(),
    fullName: Joi.string(),
    phone: Joi.string(),
    street: Joi.string(),
    postalCode: Joi.string(),
    state: Joi.any(),
    countryCode: Joi.string(),
    city: Joi.string()
  }),
  request = Joi.object({
    type: Joi.string(),
    phone: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    postalCode: Joi.string(),
    state: Joi.string(),
    countryCode: Joi.string()
  });

module.exports = {
  requestCustomer: requestRegisterCustomer,
  response: response,
  request: request
};
