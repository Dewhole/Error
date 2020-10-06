import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Sequelize, Model } from 'node_modules/sequelize-typescript/dist/index.d';

@Entity()
export class MetodPostEntity extends Model<MetodPostEntity>  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: boolean;

  @Column()
  Birth: Date;
}
