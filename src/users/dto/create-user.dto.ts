import { ApiParam, ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { Entity } from 'typeorm';
import { User } from "../entities/user.entity";


export class CreateUserDto {
    @ApiProperty({required:true})
    @IsUUID()
    id: number;

    @ApiProperty({required:true})
    @IsString()
    firstName: string;

    @ApiProperty({required:true})
    @IsString()
    lastName: string;

    @ApiProperty({required:true})
    @IsString()
    username: string;

    @ApiProperty({required:true})
    @IsString()
    email: string;

    @ApiProperty({required:true})
    @IsString()
    password: string;

    @ApiProperty({required:true})
    @IsString()
    isDeleted: boolean;

    @ApiProperty({required:true})
    @IsString()
    isActive: boolean;

    public static from (dto: Partial<CreateUserDto>){
        const us = new CreateUserDto();
        us.id = dto.id;
        us.firstName = dto.firstName;
        us.lastName = dto.lastName;
        us.username = dto.username;
        us.email = dto.email;
        us.password = dto.password;
        us.isActive= dto.isActive;
        return us;
    }
public static fromEntity (entity: User){

        return this.from({
            id: entity.id,
            firstName: entity.firstName,
            lastName: entity.lastName,
            username: entity.username,
            email: entity.email,
            password: entity.password,
            isDeleted: entity.isDeleted,
            isActive: entity.isActive
        });

    }

}
