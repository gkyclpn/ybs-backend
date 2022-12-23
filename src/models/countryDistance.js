const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'country_distance'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    country1_id: {
        type: DataTypes.INTEGER
    },
    country2_id: {
        type: DataTypes.INTEGER
    },
    distance: {
        type: DataTypes.INTEGER
    },
    duty_fee: {
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