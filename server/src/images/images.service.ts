import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { v4 } from 'uuid'
import { resolve, join, extname } from 'path'
import { existsSync, mkdirSync, writeFileSync, access, mkdir } from 'fs'
import { CreateFileDto } from './dto/create-file.dto';

@Injectable()
export class ImagesService {
	createFileUUID(file) {
		try {
			const fileName = v4() + extname(file.originalname)
			if (!fileName || fileName.length < 5) {
				throw new Error('Invalid file name');
			}
			const filePath = resolve(__dirname, '..', 'static')
			if (!existsSync(filePath)) {
				mkdirSync(filePath, { recursive: true })
			}
			writeFileSync(join(filePath, fileName), file.buffer)
			return fileName
		} catch (error) {
			throw new HttpException('Не удалось записать файл', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}

	createFileWithName(file, createFileDto: CreateFileDto) {
		try {
			const fileName = createFileDto.name + extname(file.originalname)
			const filePath = resolve(__dirname, '..', 'static')
			if (!existsSync(filePath)) {
				mkdirSync(filePath, { recursive: true })
			}
			writeFileSync(join(filePath, fileName), file.buffer)
			return fileName
		} catch (error) {
			throw new HttpException('Не удалось записать файл', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}
}
