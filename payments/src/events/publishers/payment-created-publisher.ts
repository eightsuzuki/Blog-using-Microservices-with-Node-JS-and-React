import { Subjects, Publisher, PaymentCreatedEvent } from '@suzuki8-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
