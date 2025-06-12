import { SALE_QUERYResult } from '@/sanity.types'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from './ui/card'

const DiscountBanner = ({sales}:{sales:SALE_QUERYResult}) => {
  return (
    <Carousel className='w-full max-w-screen-xl mx-auto py-10'>
        <CarouselContent>
            {sales?.map((sale)=> (
                <CarouselItem key={sale?._id}>
                    <Card>
                        <CardContent>
                            <div>
                                <div>
                                    <p>{sale?.title}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}

export default DiscountBanner