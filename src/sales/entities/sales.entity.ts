import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Sales extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalQuantity: number;

  @Column('decimal', { precision: 20, scale: 2 })
  totalValueSale: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalValueItem: number;

  @Column()
  productQuantity: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @Column()
  numberCard: string;

  @Column()
  validationDate: string;

  @Column()
  nameCard: string;

  @Column()
  validationCode: number;

  @Column()
  orderNumber: number;

  @ManyToOne(() => Users, (user) => user.sales, {
    cascade: true,
    eager: true,
  })
  user: Users;

  @ManyToOne(() => Product, (product) => product.sales, {
    cascade: true,
    eager: true,
  })
  products: Product[];
}
