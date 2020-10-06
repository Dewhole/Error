import { Sequelize, Column, Table, Model } from 'sequelize-typescript';


@Table({
    tableName: 'LOL',
  })
export class MetodPostEntity extends Model<MetodPostEntity>  {
  @Column({
     autoIncrement: true,
     primaryKey: true,
     })
     id: number;

  @Column
  FirstName: string;

  @Column
  LastName: boolean;

  @Column
  Birth: Date;
}
