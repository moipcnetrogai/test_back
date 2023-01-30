import { AllowNull, AutoIncrement, Column, Model, NotNull, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Order extends Model {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    description: string;
}