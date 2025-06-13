// // "use client"
// import { SALE_QUERYResult } from '@/sanity.types'
// import React, { useMemo } from 'react'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
// import { Card, CardContent } from './ui/card'
// import Autoplay from "embla-carousel-autoplay"
// import { Badge } from './ui/badge'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'

// const DiscountBanner = ({ sales }: { sales: SALE_QUERYResult }) => {
//     console.log(sales);
//     // const autoplayPlugin = useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false }), [])
//     return (
//         <Carousel
//             className='w-full max-w-screen-xl mx-auto my-10'
//         //   plugins={[autoplayPlugin]}
//         >
//             <CarouselContent>
//                 {sales?.map((sale) => (

//                     <CarouselItem key={sale?._id}>
//                         <Card>
//                             <CardContent className='p-0'>
//                                 <div className='flex flex-col md:flex-row items-center'>
//                                     <div className='flex-1 p-6 md:px-12 flex flex-col gap-2 md:gap-4'>
//                                         <Badge
//                                             variant='secondary'
//                                             className='text-darkBlue capitalize w-32'
//                                         >
//                                             {sale?.badge} {sale?.discountAmount}%off
//                                         </Badge>
//                                         <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight'>
//                                             {sale?.title}
//                                         </h2>
//                                         <p className='text-muted-foreground mb-2 md:mb-4'>{sale?.description}</p>
//                                         <p className='mb-2'>Use code: <span>{sale?.couponCode}</span> for <span>{sale?.discountAmount}</span> OFF</p>
//                                     </div>
//                                     <div>
//                                         {sale?.image &&
//                                             <div className='w-full md:w-1/2 h-auto flex item-center justify-center py-2'>
//                                                 <Image
//                                                     src={urlFor(sale?.image).url()}
//                                                     alt='bannerImage'
//                                                     width={500}
//                                                     height={500}
//                                                     objectFit='cover'
//                                                     className='h-full transition-transform hover:scale-105 duration-500 easy-in-out'
//                                                 />
//                                             </div>}
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious className='absolute left-2' />
//             <CarouselNext className='absolute right-2' />
//         </Carousel>
//     )
// }

// export default DiscountBanner



import { SALE_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const DiscountBanner = async ({ sales }: { sales: SALE_QUERYResult }) => {
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto mt-10 mb-5">
      <CarouselContent>
        {sales.map((sale) => (
          <CarouselItem key={sale?._id}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 p-6 md:px-12">
                    <Badge
                      variant="secondary"
                      className="mb-2 md:mb-4 text-darkBlue capitalize"
                    >
                      {sale?.badge} {sale?.discountAmount}% off
                    </Badge>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4">
                      {sale.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {sale?.description}
                    </p>
                    <p className="mb-4">
                      Use code:{" "}
                      <span className="font-semibold text-primary uppercase">
                        {sale.couponCode}
                      </span>{" "}
                      for{" "}
                      <span className="font-semibold">
                        {sale?.discountAmount}%
                      </span>{" "}
                      OFF
                    </p>
                    <Button>Shop Now</Button>
                  </div>

                  {sale?.image && (
                    <div className="w-full md:w-1/2 h-auto relative flex items-center justify-center py-2">
                      <Image
                        src={urlFor(sale?.image).url()}
                        alt={"bannerImage"}
                        width={500}
                        height={500}
                        priority
                        className="h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" />
      <CarouselNext className="absolute right-2" />
    </Carousel>
  );
};

export default DiscountBanner;
