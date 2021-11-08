import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Sales } from 'src/sales/entities/sales.entity';

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

  @Column({ nullable: false, type: 'varchar', length: 200 })
  productImage: string;

  @Column()
  productQuantity: number;

  @Column()
  productBuyPrice: number;

  @Column()
  productSalesPrice: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @OneToMany(() => Sales, (sales) => sales.products)
  sales: Sales[];
}
