const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'order'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    customer_id: {
        type: DataTypes.INTEGER
    },
    country_id: {
        type: DataTypes.INTEGER
    },
    nearest_country_id: {
        type: DataTypes.INTEGER
    },
    nearest_store_id: {
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.INTEGER
    },
    isDelete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}

class thisTable extends Model {}
thisTable.init(tableColumns, tableOptions)
module.exports = thisTable