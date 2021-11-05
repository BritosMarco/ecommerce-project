import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 60 })
  productName: string;

  @Column({ nullable: false, type: 'varchar', length: 40 })
  productBrand: string;

  @Column({ nullable: false, type: 'varchar', length: 40 })
  productModel: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column()
  amount: number;

  @Column()
  unitPrice: number;

  @Column()
  totalPrice: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}
