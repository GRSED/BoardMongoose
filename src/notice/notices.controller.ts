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
  constructor(
    private noticeService: NoticeService,
  ) {}

  @Get()
  async getNoticeList() {
    try {
      return await this.noticeService.find();;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  getNotice(@Param('id') id: number) {
    try {
      return this.noticeService.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  create(@Body() createNoticeDto: CreateNoticeDto) {
    try {
    return this.noticeService.create(createNoticeDto);
    } catch (error) {
      throw error;
    }
  }


  @Delete(':id')
  delete(@Param('id') id: number) {
    try {
    return this.noticeService.delete(id);
    } catch (error) {
      throw error;
    }
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
