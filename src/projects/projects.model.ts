import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Order } from "src/orders/order.model";

@Table
export class Project extends Model {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column
    name: string;

    @HasMany(() => Order)
    orders: Order[];
}