import { CategoryModule } from "./category.module";
export interface ProductModule {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string[];
  category: CategoryModule;
}
export interface CreateProduct extends Omit<ProductModule, "id"|"category">{
  categoryId:number
}

export interface UpdateProduct extends Partial<ProductModule>{
  categoryId:number
}

export interface DeleteProduct extends Partial<ProductModule>{
  categoryId:number
}
