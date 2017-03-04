/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-12T09:59:01+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-20T18:23:55+07:00
 */



const helpers = require('node-helpers');
const customerAddressTypes = require('../gen-nodejs/customer_address_types');

const TYPE = {
  CustomerAddress: 'CustomerAddress'
};

class CustomerAddress extends helpers.models.Base {

  get tableName() {
    return 'customer_address';
  }

  get typeAddress() {
    return TYPE;
  }

  constructor(data, opts) {

    opts = opts || {};
    super(data, opts);

    this.id = null;
    this.customerId = null;
    this.type = null;
    this.isDefault = null;
    this.fullName = '';
    this.phone = '';
    this.street = '';
    this.city = '';
    this.postalCode = '';
    this.state = '';
    this.countryCode = '';

    if (data) {
      helpers.Model.assignData(this, data, opts);

    }
  }

  getAttributes() {
    return {
      id: this.id,
      customer_id: this.customerId,
      type: this.type,
      is_default: this.isDefault,
      full_name: this.fullName,
      phone: this.phone,
      street: this.street,
      city: this.city,
      postal_code: this.postalCode,
      state: this.state,
      country_code: this.countryCode,
      status: this.status
    }
  }


  toThriftInsert(opts) {
    let model = new customerAddressTypes.CustomerAddressInsert();
    this.applyThrift(model, opts);
    return model;
  }

  toThriftObject(opts) {

    let model = new customerAddressTypes.CustomerAddress();
    this.applyThrift(model, opts);

    return model;
  }

  responseObject(opts) {

    opts = opts || {};
    let result = helpers.Model.toObject(this, opts);

    return result;

  }

}

module.exports = CustomerAddress;
