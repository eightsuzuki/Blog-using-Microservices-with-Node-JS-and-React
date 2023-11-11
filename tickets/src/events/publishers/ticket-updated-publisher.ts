import { Publisher, Subjects, TicketUpdatedEvent } from '@suzuki8-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
