const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'transport_fee'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    transport_id: {
        type: DataTypes.INTEGER
    },
    store1_id: {
        type: DataTypes.INTEGER
    },
    store2_id: {
        type: DataTypes.INTEGER
    },
    fee: {
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