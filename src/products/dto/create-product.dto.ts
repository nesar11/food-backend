import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';
import { title } from 'process';
import { Entity } from 'typeorm';
import { Product} from '../entities/product.entity';

export class CreateProductDto  implements Readonly<CreateProductDto>{
    @ApiProperty({ required: true })
    @IsUUID()
    id: number;

    @ApiProperty({ required: true })
    @IsString()
    title: string;

    @ApiProperty({ required: true })
    @IsString()
    desc: string;

    @ApiProperty({ required: true })
    @IsString()
    price: string;

    @ApiProperty({ required: true })
    @IsString()
    image: string;

    public static from (dto: Partial<CreateProductDto>){
        const it = new CreateProductDto();
        it.id = dto.id;
        it.title = dto.title;
        it.desc = dto.desc;
        it.price = dto.price;
        it.image = dto.image;
        return it;
    }
    public static fromEntity (entity: Product){
        return this.from({
            id: entity.id,
            title: entity.title,
            desc: entity.desc,
            price: entity.price,
            image: entity.image
        });
    }

}
