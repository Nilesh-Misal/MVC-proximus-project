'use strict'
module.exports=(sequelize,DataTypes)=>{
    var lanugages=sequelize.define('language',{
        netherland:DataTypes.STRING,
        english:DataTypes.STRING,
        french:DataTypes.STRING,
        german:DataTypes.STRING        
    })
    return lanugages;
}