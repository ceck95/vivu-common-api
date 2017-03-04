/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-22T22:21:13+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-23T10:59:46+07:00
 */

'use strict';

const helpers = require('node-helpers');
const productColorPreviewImageTypes = require('../gen-nodejs/product_color_preview_image_types');

class ProductColorPreviewImage extends helpers.models.Base {

  get tableName() {
    return 'product_color_image_preview';
  }

  constructor(data, opts) {

    opts = opts || {};
    super(data, opts);

    this.id = null;
    this.productColorId = null;
    this.imagePath = '';

    if (data) {
      helpers.Model.assignData(this, data, opts);
    }
  }

  getAttributes() {
    return {
      id: this.id,
      product_color_id: this.productColorId,
      image_path: this.imagePath,
      status: this.status,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      created_by: this.createdBy,
      updated_at: this.updatedAt
    }
  }


  toThriftObject(opts) {

    let model = new productColorPreviewImageTypes.ProductColor();
    this.applyThrift(model, opts);

    return model;
  }

  responseObject(opts) {

    opts = opts || {};
    let result = helpers.Model.toObject(this, opts);

    return result;
  }

}

module.exports = ProductColorPreviewImage;
