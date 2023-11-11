import { Publisher, OrderCreatedEvent, Subjects } from '@suzuki8-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
