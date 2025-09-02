export interface Maintenance {
  id: string;
  title: string;
  category_id: string;
  start_date: string;
  repeat_interval: string;
  reminder_days_before: number;
  completed: boolean;
  user_id: string;
}
