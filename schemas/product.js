/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-23T15:21:54+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-03-01T11:08:52+07:00
 */


'use strict';

const Joi = require('joi');

let response = Joi.object({
  name: Joi.string(),
  sku: Joi.string(),
  notes: Joi.string(),
  details: Joi.string(),
  urlKey: Joi.string(),
  imagePath: Joi.string(),
  basePrice: Joi.number(),
  isSoldOld: Joi.boolean(),
  categoryGroupId: Joi.number(),
  categoryId: Joi.number()
});

module.exports = {
  response: response
}
