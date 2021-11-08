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
} from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Sales extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalQuantity: number;

  @Column()
  totalValueSale: number;

  @Column()
  totalValueItem: number;

  @Column()
  productQuantity: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  /*  @ManyToMany(() => Product, (product) => product.sales)
  products: Product[]; */

  /*   @ManyToOne(() => Product, (product) => product.sales)
  product: Product; */

  @Column()
  numberCard: string;

  @Column()
  validationDate: string;

  @Column()
  nameCard: string;

  @Column()
  validationCode: number;

  @ManyToOne(() => Users, (user) => user.sales)
  user: Users;
}
