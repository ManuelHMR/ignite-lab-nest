import { IsNotEmpty } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: number;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}
