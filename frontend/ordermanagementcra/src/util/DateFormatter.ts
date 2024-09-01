import { DATE_FORMAT_DATE_PICKER } from '../features/types/Constants';
import { format } from 'date-fns';

export function formatDatePicker(dateValue: Date): string {
  if (!dateValue) return format(new Date(), DATE_FORMAT_DATE_PICKER);

  return format(new Date(dateValue), DATE_FORMAT_DATE_PICKER);
}
