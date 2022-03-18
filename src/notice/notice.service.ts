import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notice, NoticeDocument } from './notice.shcema';
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

  async find(
    category?: string,
    title?: string,
    writer?: string,
  ): Promise<Notice[]> {
    if (writer) {
      return this.noticeModel
        .find({ writer: writer, flag: false }, '_id')
        .exec();
    } else if (title) {
      if (category) {
        return this.noticeModel
          .find(
            {
              flag: true,
              category: category,
              title: { $regex: title, $options: 'i' },
            },
            'category title writeDate writer',
          )
          .exec();
      } else {
        return this.noticeModel
          .find(
            {
              flag: true,
              title: { $regex: title, $options: 'i' },
            },
            'category title writeDate writer',
          )
          .exec();
      }
    } else {
      if (category) {
        return this.noticeModel
          .find(
            {
              flag: true,
              category: category,
            },
            'category title writeDate writer',
          )
          .exec();
      } else {
        return this.noticeModel
          .find({ flag: true }, 'category title writeDate writer')
          .exec();
      }
    }
  }

  async findOne(id: string): Promise<Notice> {
    return this.noticeModel.findById(id).exec();
  }

  async delete(id: string): Promise<Notice> {
    return await this.noticeModel.findByIdAndDelete(id);
  }

  async deleteAll(): Promise<any> {
    return await this.noticeModel.deleteMany();
  }

  async update(id: string, updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
    return await this.noticeModel.findByIdAndUpdate(id, updateNoticeDto);
  }
}
