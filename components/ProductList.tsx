import { Category, Product } from "@/sanity.types"
import Categories from "./Categories";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
    title?: boolean;
    categories: Category[]
}

const ProductList = ({ products, title, categories }: Props) => {
    return (
        <div className="pb-32">
            <Categories categories={categories} />
            <div>
                <h2
                    className="text-2xl font-semibold text-gray-600"
                >
                    Day of the <span>Deal</span>
                </h2>
                <p>Don&apos;t wait the time will never be just right</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products?.map((product)=>(
                    <ProductCard key={product?._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList



