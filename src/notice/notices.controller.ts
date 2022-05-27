import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NoticeService } from './notices.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}

  @Get()
  async getNoticeList(
    @Query('page') page?: number,
    @Query('pageSize') pageSize?: number,
  ) {
    try {
      const noticeListTotalCount = await this.noticeService.getTotalCount();
      const noticeList = await this.noticeService.find(page, pageSize);
      return noticeList;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  getNotice(@Param('id') id: number) {
    try {
      return this.noticeService.findOne(id);
    } catch (error) {
      return error;
    }
  }

  @Post()
  create(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticeService.create(createNoticeDto);
  }


  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.noticeService.delete(id);
  }

  @Put(':id')
  async updateNotice(@Param('id') id: number, @Body() updateNoticeDto: UpdateNoticeDto) {
    try {
      return this.noticeService.update(id, updateNoticeDto);
    } catch (error) {
      throw error;
    }
  }
}
