const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'stock'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    store_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    stock: {
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