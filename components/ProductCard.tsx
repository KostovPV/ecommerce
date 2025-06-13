import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <div
            className='border border-gray-300 rounded-lg overflow-hidden group text-sm'
        >
            <div>
                {product?.image && (
                    <Link href={`/product/${product?.slug?.current}`}>
                    <Image
                        src={urlFor(product?.image).url()} alt='productImage'
                        width={500}
                        height={500}
                        loading='lazy'
                        className={`w-full max-h-96 object-cover overflow-hidden transition-transform group-hover:scale-105 duration-500`}
                    />
                    </Link>
                )}
            </div>
            <div className='p-5'>
                desription
            </div>
        </div>
    )
}

export default ProductCard