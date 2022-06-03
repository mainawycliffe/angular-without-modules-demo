import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTime',
  standalone: true,
})
export class DateTimePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string | null {
    if (typeof value === 'string') {
      return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED);
    }
    return null;
  }
}
