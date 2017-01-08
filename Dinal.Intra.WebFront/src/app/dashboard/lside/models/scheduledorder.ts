import { Order } from './order';
import { Workman } from './workman';

export class ScheduledOrder {
  order: Order;
  workman: Workman;
  date: Date;
  pathLength: number;

  constructor(){
    this.order = new Order();
    this.workman = new Workman();
    this.date = new Date();
  }
}
