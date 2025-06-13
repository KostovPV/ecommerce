import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCartBar from './ProductCartBar'
interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    const isStock = product?.stock !== 0;
    return (
        <div
            className='border border-gray-300 rounded-lg overflow-hidden group text-sm'
        >
            <div className='border-b border-b-gray-300 overflow-hidden relative'>
                {product?.image && (
                    <Link href={`/product/${product?.slug?.current}`}>
                        <Image
                            src={urlFor(product?.image).url()} alt='productImage'
                            width={500}
                            height={500}
                            loading='lazy'
                            className={`w-full max-h-96 object-cover overflow-hidden transition-transform ${product?.stock !== 0 && 'group-hover:scale-105 duration-500'}`}
                        />
                    </Link>
                )}
                {product?.stock === 0 && (<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                    <p className='text-lg font-bold text-white'>Out of stock</p>
                </div>)}
                {product?.status && product?.stock !== 0 && (
                    <div className='absolute left-1 top-1 z-10 flex flex-col items-center space-y-1 group-hover:opacity-0 transition-opacity duration-300'>
                        {product?.status?.split('').map((char, index) => (
                            <span key={index} className='font-semibold uppercase'>{char}</span>
                        ))}
                    </div>
                )}
                {isStock && (
                    <div className='absolute bottom-5 left-0 w-full'>
                        <ProductCartBar />
                    </div>
                )}
            </div>
            <div className='p-5'>
                desription
            </div>
        </div>
    )
}

export default ProductCard