import { Publisher, Subjects, TicketCreatedEvent } from '@suzuki8-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
