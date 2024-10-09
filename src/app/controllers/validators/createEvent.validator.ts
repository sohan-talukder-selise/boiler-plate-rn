import _createEvent from '../models/_createEvent.model';

class createEventValidator {
  isValidEvent() {
    const {
      title,
      category,
      start_time,
      event_date,
      notice_hour,
      lat,
      number_of_people,
    } = _createEvent;
    if (!title) {
      return 'Event title is required!';
    }
    if (!category) {
      return 'Category is required!';
    }
    if (!start_time) {
      return 'Event start time is required!';
    }
    if (!event_date) {
      return 'Event date is required!';
    }
    if (!notice_hour) {
      return 'Notice hour is required!';
    }
    if (!lat) {
      return 'Event location is required!';
    }
    if (!number_of_people) {
      return 'Number of participants is required!';
    }
    return '';
  }
}

export default new createEventValidator();
