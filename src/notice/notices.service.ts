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

  async find(page?: number, pageSize?: number): Promise<Notice[]> {
    let searchQuery = `SELECT * FROM notice WHERE 1=1`;
    if (page && pageSize) {
      searchQuery += ` LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`;
    }
    return this.noticeModel.find();
  }

  async findOne(id: number): Promise<Notice> {
    return this.noticeModel.findById(id).exec();
  }

  async delete(id: number): Promise<Notice> {
    return await this.noticeModel.findByIdAndDelete(id);
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
    // const queryRunner = this.connection.createQueryRunner();

    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   const updatedDatalog = await queryRunner.manager.update(
    //     Datalog,
    //     id,
    //     updateDatalogDto,
    //   );
    //   if (updatedDatalog.affected === 0) throw new NotFoundException();
    //   return updateDatalogDto;
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   throw error;
    // } finally {
    //   await queryRunner.release();
    // }
    return await this.noticeModel.findByIdAndUpdate(id, updateNoticeDto);
  }

  getTotalCount() {
    return this.noticeModel.count();
  }
}
