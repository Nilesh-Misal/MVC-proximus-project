'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
      newcustomerno:DataTypes.STRING,
      existingcustomerno:DataTypes.STRING,
      ///language:DataTypes.STRING,

    language: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('language').split(';')
        },
        set(val) {
           this.setDataValue('language',val.join(';'));
        }
      },
    


      conatctperson:DataTypes.STRING,
      companyname:DataTypes.STRING,
      address:DataTypes.STRING,
      postalcode:DataTypes.STRING,
      vatno:DataTypes.STRING,
      installation:DataTypes.STRING,
      techlastname:DataTypes.STRING,
      techfirstname:DataTypes.STRING,
      telephone:DataTypes.STRING,
      techmobileno:DataTypes.STRING,
      techemail:DataTypes.STRING,
      adlastname:DataTypes.STRING,
      adfirstname:DataTypes.STRING,
      adtelephone:DataTypes.STRING,
      ademobileno:DataTypes.STRING,
      ademail:DataTypes.STRING,
      bcino:DataTypes.STRING,
      proximusref:DataTypes.STRING,
      saleschannel:DataTypes.STRING,
      sellercontactname:DataTypes.STRING,
      sellercontacttelephone:DataTypes.STRING,
      sellercontactmobile:DataTypes.STRING,
      sellercontactemail:DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  // Customer.associate = function (models) {
  //   models.Customer.belongsTo(models.languages, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Customer;
};
