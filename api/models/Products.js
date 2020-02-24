/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id : {
      type : 'number',
      columnType: 'int',
      columnName : 'p_id',
      isInteger: true,
      required: true
    },
    name: {
      type : 'string',
      columnType: 'varchar',
      maxLength: 45,
      required: true
    },
    p_url: {
      type : 'string',
      columnType: 'text',
      required: true
    },
    brand_id : {
      model: "brands",
      required: true
    },
    img_url: {
      type : 'string',
      columnType: 'text',
      allowNull: true
    },
    price: {
      type : 'number',
      columnType: 'float',
      required: true
    },
    mrp :{
      type : 'number',
      columnType: 'float',
      required: true
    },
    packing_Qty: {
      type : 'number',
      columnType: 'int',
      required: true
    },
    MOQ: { 
      type : 'string',
      columnType: 'varchar',
      allowNull: true
    },
    discount: {
      type : 'number',
      columnType: 'float',
      allowNull: true
    },
    category_id:{
      model : 'categories',
      required: true
    },
    created_on: {
      type: "ref",
      columnType: "timestamp",
      defaultsTo: "CURRENT_TIMESTAMP"
    }


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

