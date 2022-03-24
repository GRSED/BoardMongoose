export class CreateNoticeDto {
  category: string;
  title: string;
  content: string;
  writeDate: Date;
  noticeDate: Date;
  writer: string;
  fileUrl: string;
  importance: boolean;
  right: string;
}
