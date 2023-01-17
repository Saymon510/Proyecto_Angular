import { CategoryModule } from "./category.model";
export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string[];
  category: CategoryModule;
}
export interface CreateProductDto extends Omit<ProductModel, "id"|"category">{
  categoryId:number
}

export interface UpdateProductDto extends Partial<ProductModel>{
  categoryId?:number
}
