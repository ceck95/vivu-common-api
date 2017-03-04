//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
if (typeof vv === 'undefined') {
  vv = {};
}
if (typeof vv.models === 'undefined') {
  vv.models = {};
}
vv.models.ProductColor = module.exports.ProductColor = function(args) {
  this.id = null;
  this.productId = null;
  this.colorName = null;
  this.referProductImagePath = null;
  this.price = null;
  this.priority = null;
  this.isSoldOut = null;
  this.status = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.createdBy = null;
  this.updatedBy = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.colorName !== undefined && args.colorName !== null) {
      this.colorName = args.colorName;
    }
    if (args.referProductImagePath !== undefined && args.referProductImagePath !== null) {
      this.referProductImagePath = args.referProductImagePath;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.priority !== undefined && args.priority !== null) {
      this.priority = args.priority;
    }
    if (args.isSoldOut !== undefined && args.isSoldOut !== null) {
      this.isSoldOut = args.isSoldOut;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.createdAt !== undefined && args.createdAt !== null) {
      this.createdAt = args.createdAt;
    }
    if (args.updatedAt !== undefined && args.updatedAt !== null) {
      this.updatedAt = args.updatedAt;
    }
    if (args.createdBy !== undefined && args.createdBy !== null) {
      this.createdBy = args.createdBy;
    }
    if (args.updatedBy !== undefined && args.updatedBy !== null) {
      this.updatedBy = args.updatedBy;
    }
  }
};
vv.models.ProductColor.prototype = {};
vv.models.ProductColor.prototype.read = function(input) {
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
        this.productId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.colorName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.referProductImagePath = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.price = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.priority = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.isSoldOut = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.createdAt = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.updatedAt = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.createdBy = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.updatedBy = input.readString();
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

vv.models.ProductColor.prototype.write = function(output) {
  output.writeStructBegin('ProductColor');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.I32, 2);
    output.writeI32(this.productId);
    output.writeFieldEnd();
  }
  if (this.colorName !== null && this.colorName !== undefined) {
    output.writeFieldBegin('colorName', Thrift.Type.STRING, 3);
    output.writeString(this.colorName);
    output.writeFieldEnd();
  }
  if (this.referProductImagePath !== null && this.referProductImagePath !== undefined) {
    output.writeFieldBegin('referProductImagePath', Thrift.Type.STRING, 4);
    output.writeString(this.referProductImagePath);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.price);
    output.writeFieldEnd();
  }
  if (this.priority !== null && this.priority !== undefined) {
    output.writeFieldBegin('priority', Thrift.Type.I32, 6);
    output.writeI32(this.priority);
    output.writeFieldEnd();
  }
  if (this.isSoldOut !== null && this.isSoldOut !== undefined) {
    output.writeFieldBegin('isSoldOut', Thrift.Type.BOOL, 7);
    output.writeBool(this.isSoldOut);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 8);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.createdAt !== null && this.createdAt !== undefined) {
    output.writeFieldBegin('createdAt', Thrift.Type.STRING, 9);
    output.writeString(this.createdAt);
    output.writeFieldEnd();
  }
  if (this.updatedAt !== null && this.updatedAt !== undefined) {
    output.writeFieldBegin('updatedAt', Thrift.Type.STRING, 10);
    output.writeString(this.updatedAt);
    output.writeFieldEnd();
  }
  if (this.createdBy !== null && this.createdBy !== undefined) {
    output.writeFieldBegin('createdBy', Thrift.Type.STRING, 11);
    output.writeString(this.createdBy);
    output.writeFieldEnd();
  }
  if (this.updatedBy !== null && this.updatedBy !== undefined) {
    output.writeFieldBegin('updatedBy', Thrift.Type.STRING, 12);
    output.writeString(this.updatedBy);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
