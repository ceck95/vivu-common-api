/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-22T22:21:13+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-03-03T11:21:43+07:00
 */

'use strict';

const helpers = require('node-helpers');
const productTypes = require('../gen-nodejs/product_types');
const Category = require('./category');
const CategoryGroup = require('./category-group');

class Product extends helpers.models.Base {

  get tableName() {
    return 'product';
  }

  get paginationThriftClass() {
    return productTypes.PaginationProduct;
  }

  constructor(data, opts) {

    opts = opts || {};
    super(data, opts);

    this.id = null;
    this.categoryId = null;
    this.name = '';
    this.sku = '';
    this.metaDesc = {};
    this.notes = '';
    this.details = '';
    this.urlKey = '';
    this.imagePath = '';
    this.basePrice = null;
    this.isSoldOld = null;
    this.categoryGroupId = null;

    if (data) {
      helpers.Model.assignData(this, data, opts);
      let categories = new Category();
      let categoriesGroup = new CategoryGroup();

      if (data.categories) {
        this.categories = data.categories.getAttributes ? data.categories : new Category(data.categories);
      } else if (opts.includes ? opts.includes.indexOf(categories.tableAlias) > -1 : false) {
        this.categories = new Category(data, {
          prefix: categories.tableAlias
        });
      }

      if (data.categoriesGroup) {
        this.categoriesGroup = data.categoriesGroup.getAttributes ? data.categoriesGroup : new CategoryGroup(data.categoriesGroup);
      } else if (opts.includes ? opts.includes.indexOf(categoriesGroup.tableAlias) > -1 : false) {
        this.categoriesGroup = new CategoryGroup(data, {
          prefix: categoriesGroup.tableAlias
        });
      }

    }
  }

  getAttributes() {
    return {
      id: this.id,
      category_id: this.categoryId,
      name: this.name,
      sku: this.sku,
      meta_desc: this.metaDesc,
      notes: this.notes,
      details: this.details,
      url_key: this.urlKey,
      image_path: this.imagePath,
      base_price: this.basePrice,
      is_sold_old: this.isSoldOld,
      status: this.status,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      created_by: this.createdBy,
      updated_at: this.updatedAt,
      category_group_id: this.categoryGroupId
    }
  }

  applyThrift(model, opts) {
    super.applyThrift(model, opts);
    model.metaDesc = JSON.stringify(model.metaDesc);
  }

  toThriftObject(opts) {

    let model = new productTypes.Product();
    this.applyThrift(model, opts);
    if (this.categories) {
      model.categories = this.categories.toThriftObject();
    }
    if (this.categoriesGroup) {
      model.categoriesGroup = this.categoriesGroup.toThriftObject();
    }

    return model;
  }

  toThriftFilter(opts) {

    let model = new productTypes.ProductFilter();
    this.applyThrift(model, opts);

    return model;

  }

  responseObject(opts) {

    opts = opts || {};
    let result = helpers.Model.toObject(this, opts);

    if (helpers.Model.checkAvailableKey('metaDesc', opts)) {
      result.metaDesc = JSON.stringify(this.metaDesc);
    }

    return result;
  }

}

module.exports = Product;
