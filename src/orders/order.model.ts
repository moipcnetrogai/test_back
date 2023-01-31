import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Project } from 'src/projects/projects.model';

@Table
export class Order extends Model {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    description?: string;

    @ForeignKey(() => Project)
    @Column
    projectId:number;

    @BelongsTo(() => Project)
    project: Project;
}