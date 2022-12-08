import { CategoryModule } from "./category.module";
export interface ProductModule {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string[];
  category: CategoryModule;
  
}
