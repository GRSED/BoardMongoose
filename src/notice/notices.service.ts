import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notice, NoticeDocument } from './schema/notices.schema';
import { Model } from 'mongoose';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Injectable()
export class NoticeService {
  constructor(
    @InjectModel(Notice.name) private noticeModel: Model<NoticeDocument>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto): Promise<Notice> {
    const createdNotice = new this.noticeModel(createNoticeDto);
    return await createdNotice.save();
  }

  async find(): Promise<Notice[]> {
    return this.noticeModel.find();
  }

  async findOne(id: number): Promise<Notice> {
    return this.noticeModel.findById(id).exec();
  }

  async delete(id: number): Promise<Notice> {
    return await this.noticeModel.findByIdAndDelete(id);
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
    return await this.noticeModel.findByIdAndUpdate(id, updateNoticeDto);
  }
}
