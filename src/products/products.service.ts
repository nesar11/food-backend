import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  createProductDto: any;
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ){}

  
  create(createProductDto: CreateProductDto):Observable<CreateProductDto> {
    return from(this.repo.save(createProductDto));
  }
   
  

  findAll():Observable<CreateProductDto[]> {
    return from (this.repo.find())
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto): Observable<UpdateResult> {
    return from ( this.repo.update(id, updateProductDto));
  }

  remove(id: number): Observable<DeleteResult>{
    return from (this.repo.delete(id));
  }
}
