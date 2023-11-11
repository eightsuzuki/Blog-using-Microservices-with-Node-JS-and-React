import { Subjects, Publisher, OrderCancelledEvent } from '@suzuki8-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
