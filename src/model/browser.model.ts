import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'browser',
    timestamps: false
})

export class BrowserModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        autoIncrement: true,
        primaryKey: true
    })
    id?: number;

    @Column({
        allowNull: false,
        type: DataType.STRING(256)
    }) title?: string;

    @Column({
        allowNull: false,
        type: DataType.DATE
    }) created_date?: string;
}