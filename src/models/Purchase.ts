import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Client from './Client';
import Item from './Item';

@Entity('purchase')
class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Client)
  @JoinColumn({ name: 'client_id' })
  client_id: string;

  @ManyToMany(() => Item)
  @JoinColumn({ name: 'item_id' })
  item_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Purchase;
