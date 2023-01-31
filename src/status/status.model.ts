import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Order } from "src/orders/order.model";

@Table
export class Status extends Model {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column
    code_name: string;

    @AllowNull(false)
    @Column
    step: number;

    @HasMany(() => Order)
    orders: Order[];
}