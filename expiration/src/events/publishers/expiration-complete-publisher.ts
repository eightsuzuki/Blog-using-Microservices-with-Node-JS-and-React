import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@suzuki8-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
