const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'customer'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    country_id: {
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