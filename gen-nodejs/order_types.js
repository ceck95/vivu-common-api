//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var pagination_ttypes = require('./pagination_types')
var customer_address_ttypes = require('./customer_address_types')
var order_payment_ttypes = require('./order_payment_types')


var ttypes = module.exports = {};
if (typeof vv === 'undefined') {
  vv = {};
}
if (typeof vv.models === 'undefined') {
  vv.models = {};
}
vv.models.Order = module.exports.Order = function(args) {
  this.id = null;
  this.orderStatus = null;
  this.customerId = null;
  this.customerFullName = null;
  this.customerPhone = null;
  this.quoteId = null;
  this.shippingAddressId = null;
  this.shippingAmount = null;
  this.subtotal = null;
  this.grandTotal = null;
  this.address = null;
  this.orderPayment = null;
  this.createdAt = null;
  this.code = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.orderStatus !== undefined && args.orderStatus !== null) {
      this.orderStatus = args.orderStatus;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerFullName !== undefined && args.customerFullName !== null) {
      this.customerFullName = args.customerFullName;
    }
    if (args.customerPhone !== undefined && args.customerPhone !== null) {
      this.customerPhone = args.customerPhone;
    }
    if (args.quoteId !== undefined && args.quoteId !== null) {
      this.quoteId = args.quoteId;
    }
    if (args.shippingAddressId !== undefined && args.shippingAddressId !== null) {
      this.shippingAddressId = args.shippingAddressId;
    }
    if (args.shippingAmount !== undefined && args.shippingAmount !== null) {
      this.shippingAmount = args.shippingAmount;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = new customer_address_ttypes.CustomerAddress(args.address);
    }
    if (args.orderPayment !== undefined && args.orderPayment !== null) {
      this.orderPayment = new order_payment_ttypes.OrderPayment(args.orderPayment);
    }
    if (args.createdAt !== undefined && args.createdAt !== null) {
      this.createdAt = args.createdAt;
    }
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
  }
};
vv.models.Order.prototype = {};
vv.models.Order.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.orderStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.customerFullName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.customerPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.quoteId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.shippingAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.shippingAmount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.subtotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.DOUBLE) {
        this.grandTotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRUCT) {
        this.address = new customer_address_ttypes.CustomerAddress();
        this.address.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRUCT) {
        this.orderPayment = new order_payment_ttypes.OrderPayment();
        this.orderPayment.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.createdAt = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.code = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.Order.prototype.write = function(output) {
  output.writeStructBegin('Order');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.orderStatus !== null && this.orderStatus !== undefined) {
    output.writeFieldBegin('orderStatus', Thrift.Type.I32, 2);
    output.writeI32(this.orderStatus);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 3);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerFullName !== null && this.customerFullName !== undefined) {
    output.writeFieldBegin('customerFullName', Thrift.Type.STRING, 4);
    output.writeString(this.customerFullName);
    output.writeFieldEnd();
  }
  if (this.customerPhone !== null && this.customerPhone !== undefined) {
    output.writeFieldBegin('customerPhone', Thrift.Type.STRING, 5);
    output.writeString(this.customerPhone);
    output.writeFieldEnd();
  }
  if (this.quoteId !== null && this.quoteId !== undefined) {
    output.writeFieldBegin('quoteId', Thrift.Type.I32, 6);
    output.writeI32(this.quoteId);
    output.writeFieldEnd();
  }
  if (this.shippingAddressId !== null && this.shippingAddressId !== undefined) {
    output.writeFieldBegin('shippingAddressId', Thrift.Type.I32, 7);
    output.writeI32(this.shippingAddressId);
    output.writeFieldEnd();
  }
  if (this.shippingAmount !== null && this.shippingAmount !== undefined) {
    output.writeFieldBegin('shippingAmount', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.shippingAmount);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.DOUBLE, 10);
    output.writeDouble(this.grandTotal);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRUCT, 11);
    this.address.write(output);
    output.writeFieldEnd();
  }
  if (this.orderPayment !== null && this.orderPayment !== undefined) {
    output.writeFieldBegin('orderPayment', Thrift.Type.STRUCT, 12);
    this.orderPayment.write(output);
    output.writeFieldEnd();
  }
  if (this.createdAt !== null && this.createdAt !== undefined) {
    output.writeFieldBegin('createdAt', Thrift.Type.STRING, 13);
    output.writeString(this.createdAt);
    output.writeFieldEnd();
  }
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.STRING, 14);
    output.writeString(this.code);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.OrderInsert = module.exports.OrderInsert = function(args) {
  this.orderStatus = null;
  this.customerId = null;
  this.customerFullName = null;
  this.customerPhone = null;
  this.quoteId = null;
  this.shippingAddressId = null;
  this.shippingAmount = null;
  this.subtotal = null;
  this.grandTotal = null;
  if (args) {
    if (args.orderStatus !== undefined && args.orderStatus !== null) {
      this.orderStatus = args.orderStatus;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerFullName !== undefined && args.customerFullName !== null) {
      this.customerFullName = args.customerFullName;
    }
    if (args.customerPhone !== undefined && args.customerPhone !== null) {
      this.customerPhone = args.customerPhone;
    }
    if (args.quoteId !== undefined && args.quoteId !== null) {
      this.quoteId = args.quoteId;
    }
    if (args.shippingAddressId !== undefined && args.shippingAddressId !== null) {
      this.shippingAddressId = args.shippingAddressId;
    }
    if (args.shippingAmount !== undefined && args.shippingAmount !== null) {
      this.shippingAmount = args.shippingAmount;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
  }
};
vv.models.OrderInsert.prototype = {};
vv.models.OrderInsert.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.orderStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.customerFullName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.customerPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.quoteId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.shippingAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.shippingAmount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.subtotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.grandTotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.OrderInsert.prototype.write = function(output) {
  output.writeStructBegin('OrderInsert');
  if (this.orderStatus !== null && this.orderStatus !== undefined) {
    output.writeFieldBegin('orderStatus', Thrift.Type.I32, 1);
    output.writeI32(this.orderStatus);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 2);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerFullName !== null && this.customerFullName !== undefined) {
    output.writeFieldBegin('customerFullName', Thrift.Type.STRING, 3);
    output.writeString(this.customerFullName);
    output.writeFieldEnd();
  }
  if (this.customerPhone !== null && this.customerPhone !== undefined) {
    output.writeFieldBegin('customerPhone', Thrift.Type.STRING, 4);
    output.writeString(this.customerPhone);
    output.writeFieldEnd();
  }
  if (this.quoteId !== null && this.quoteId !== undefined) {
    output.writeFieldBegin('quoteId', Thrift.Type.I32, 5);
    output.writeI32(this.quoteId);
    output.writeFieldEnd();
  }
  if (this.shippingAddressId !== null && this.shippingAddressId !== undefined) {
    output.writeFieldBegin('shippingAddressId', Thrift.Type.I32, 6);
    output.writeI32(this.shippingAddressId);
    output.writeFieldEnd();
  }
  if (this.shippingAmount !== null && this.shippingAmount !== undefined) {
    output.writeFieldBegin('shippingAmount', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.shippingAmount);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.grandTotal);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.OrderForm = module.exports.OrderForm = function(args) {
  this.id = null;
  this.orderStatus = null;
  this.customerId = null;
  this.customerFullName = null;
  this.customerPhone = null;
  this.quoteId = null;
  this.shippingAddressId = null;
  this.shippingAmount = null;
  this.subtotal = null;
  this.grandTotal = null;
  this.status = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.orderStatus !== undefined && args.orderStatus !== null) {
      this.orderStatus = args.orderStatus;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerFullName !== undefined && args.customerFullName !== null) {
      this.customerFullName = args.customerFullName;
    }
    if (args.customerPhone !== undefined && args.customerPhone !== null) {
      this.customerPhone = args.customerPhone;
    }
    if (args.quoteId !== undefined && args.quoteId !== null) {
      this.quoteId = args.quoteId;
    }
    if (args.shippingAddressId !== undefined && args.shippingAddressId !== null) {
      this.shippingAddressId = args.shippingAddressId;
    }
    if (args.shippingAmount !== undefined && args.shippingAmount !== null) {
      this.shippingAmount = args.shippingAmount;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
  }
};
vv.models.OrderForm.prototype = {};
vv.models.OrderForm.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.orderStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.customerFullName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.customerPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.quoteId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.shippingAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.shippingAmount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.subtotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.DOUBLE) {
        this.grandTotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.OrderForm.prototype.write = function(output) {
  output.writeStructBegin('OrderForm');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.orderStatus !== null && this.orderStatus !== undefined) {
    output.writeFieldBegin('orderStatus', Thrift.Type.I32, 2);
    output.writeI32(this.orderStatus);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 3);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerFullName !== null && this.customerFullName !== undefined) {
    output.writeFieldBegin('customerFullName', Thrift.Type.STRING, 4);
    output.writeString(this.customerFullName);
    output.writeFieldEnd();
  }
  if (this.customerPhone !== null && this.customerPhone !== undefined) {
    output.writeFieldBegin('customerPhone', Thrift.Type.STRING, 5);
    output.writeString(this.customerPhone);
    output.writeFieldEnd();
  }
  if (this.quoteId !== null && this.quoteId !== undefined) {
    output.writeFieldBegin('quoteId', Thrift.Type.I32, 6);
    output.writeI32(this.quoteId);
    output.writeFieldEnd();
  }
  if (this.shippingAddressId !== null && this.shippingAddressId !== undefined) {
    output.writeFieldBegin('shippingAddressId', Thrift.Type.I32, 7);
    output.writeI32(this.shippingAddressId);
    output.writeFieldEnd();
  }
  if (this.shippingAmount !== null && this.shippingAmount !== undefined) {
    output.writeFieldBegin('shippingAmount', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.shippingAmount);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.DOUBLE, 10);
    output.writeDouble(this.grandTotal);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 11);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.OrderFilter = module.exports.OrderFilter = function(args) {
  this.orderStatus = null;
  this.customerId = null;
  this.customerFullName = null;
  this.customerPhone = null;
  this.quoteId = null;
  this.shippingAddressId = null;
  this.shippingAmount = null;
  this.subtotal = null;
  this.grandTotal = null;
  if (args) {
    if (args.orderStatus !== undefined && args.orderStatus !== null) {
      this.orderStatus = args.orderStatus;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerFullName !== undefined && args.customerFullName !== null) {
      this.customerFullName = args.customerFullName;
    }
    if (args.customerPhone !== undefined && args.customerPhone !== null) {
      this.customerPhone = args.customerPhone;
    }
    if (args.quoteId !== undefined && args.quoteId !== null) {
      this.quoteId = args.quoteId;
    }
    if (args.shippingAddressId !== undefined && args.shippingAddressId !== null) {
      this.shippingAddressId = args.shippingAddressId;
    }
    if (args.shippingAmount !== undefined && args.shippingAmount !== null) {
      this.shippingAmount = args.shippingAmount;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
  }
};
vv.models.OrderFilter.prototype = {};
vv.models.OrderFilter.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.orderStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.customerFullName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.customerPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.quoteId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.shippingAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.shippingAmount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.subtotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.grandTotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.OrderFilter.prototype.write = function(output) {
  output.writeStructBegin('OrderFilter');
  if (this.orderStatus !== null && this.orderStatus !== undefined) {
    output.writeFieldBegin('orderStatus', Thrift.Type.I32, 1);
    output.writeI32(this.orderStatus);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 2);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerFullName !== null && this.customerFullName !== undefined) {
    output.writeFieldBegin('customerFullName', Thrift.Type.STRING, 3);
    output.writeString(this.customerFullName);
    output.writeFieldEnd();
  }
  if (this.customerPhone !== null && this.customerPhone !== undefined) {
    output.writeFieldBegin('customerPhone', Thrift.Type.STRING, 4);
    output.writeString(this.customerPhone);
    output.writeFieldEnd();
  }
  if (this.quoteId !== null && this.quoteId !== undefined) {
    output.writeFieldBegin('quoteId', Thrift.Type.I32, 5);
    output.writeI32(this.quoteId);
    output.writeFieldEnd();
  }
  if (this.shippingAddressId !== null && this.shippingAddressId !== undefined) {
    output.writeFieldBegin('shippingAddressId', Thrift.Type.I32, 6);
    output.writeI32(this.shippingAddressId);
    output.writeFieldEnd();
  }
  if (this.shippingAmount !== null && this.shippingAmount !== undefined) {
    output.writeFieldBegin('shippingAmount', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.shippingAmount);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.grandTotal);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.OrderQuery = module.exports.OrderQuery = function(args) {
  this.orderStatus = null;
  this.customerId = null;
  this.customerFullName = null;
  this.customerPhone = null;
  this.quoteId = null;
  this.shippingAddressId = null;
  this.shippingAmount = null;
  this.subtotal = null;
  this.grandTotal = null;
  if (args) {
    if (args.orderStatus !== undefined && args.orderStatus !== null) {
      this.orderStatus = args.orderStatus;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerFullName !== undefined && args.customerFullName !== null) {
      this.customerFullName = args.customerFullName;
    }
    if (args.customerPhone !== undefined && args.customerPhone !== null) {
      this.customerPhone = args.customerPhone;
    }
    if (args.quoteId !== undefined && args.quoteId !== null) {
      this.quoteId = args.quoteId;
    }
    if (args.shippingAddressId !== undefined && args.shippingAddressId !== null) {
      this.shippingAddressId = args.shippingAddressId;
    }
    if (args.shippingAmount !== undefined && args.shippingAmount !== null) {
      this.shippingAmount = args.shippingAmount;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
  }
};
vv.models.OrderQuery.prototype = {};
vv.models.OrderQuery.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.orderStatus = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.customerFullName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.customerPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.quoteId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.shippingAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.shippingAmount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.subtotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.grandTotal = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.OrderQuery.prototype.write = function(output) {
  output.writeStructBegin('OrderQuery');
  if (this.orderStatus !== null && this.orderStatus !== undefined) {
    output.writeFieldBegin('orderStatus', Thrift.Type.I32, 1);
    output.writeI32(this.orderStatus);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 2);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerFullName !== null && this.customerFullName !== undefined) {
    output.writeFieldBegin('customerFullName', Thrift.Type.STRING, 3);
    output.writeString(this.customerFullName);
    output.writeFieldEnd();
  }
  if (this.customerPhone !== null && this.customerPhone !== undefined) {
    output.writeFieldBegin('customerPhone', Thrift.Type.STRING, 4);
    output.writeString(this.customerPhone);
    output.writeFieldEnd();
  }
  if (this.quoteId !== null && this.quoteId !== undefined) {
    output.writeFieldBegin('quoteId', Thrift.Type.I32, 5);
    output.writeI32(this.quoteId);
    output.writeFieldEnd();
  }
  if (this.shippingAddressId !== null && this.shippingAddressId !== undefined) {
    output.writeFieldBegin('shippingAddressId', Thrift.Type.I32, 6);
    output.writeI32(this.shippingAddressId);
    output.writeFieldEnd();
  }
  if (this.shippingAmount !== null && this.shippingAmount !== undefined) {
    output.writeFieldBegin('shippingAmount', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.shippingAmount);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.grandTotal);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.PaginationOrder = module.exports.PaginationOrder = function(args) {
  this.pagination = null;
  this.data = null;
  if (args) {
    if (args.pagination !== undefined && args.pagination !== null) {
      this.pagination = new pagination_ttypes.Pagination(args.pagination);
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [ttypes.Order]);
    }
  }
};
vv.models.PaginationOrder.prototype = {};
vv.models.PaginationOrder.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.pagination = new pagination_ttypes.Pagination();
        this.pagination.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.data = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Order();
          elem6.read(input);
          this.data.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.PaginationOrder.prototype.write = function(output) {
  output.writeStructBegin('PaginationOrder');
  if (this.pagination !== null && this.pagination !== undefined) {
    output.writeFieldBegin('pagination', Thrift.Type.STRUCT, 1);
    this.pagination.write(output);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.data.length);
    for (var iter7 in this.data)
    {
      if (this.data.hasOwnProperty(iter7))
      {
        iter7 = this.data[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
