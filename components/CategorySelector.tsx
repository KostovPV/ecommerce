'use client'
import { cn } from "@/lib/utils";
import { Category } from '@/sanity.types'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
interface Props {
    categories: Category[];
}
const CategorySelector = ({ categories }: Props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const router = useRouter();
    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-[200px] justify-between'
                >
                    {value ? categories.find((categoriy) => categoriy?._id === value)?.title : "Filter by Cathegory"}
                    <ChevronsUpDown />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200] p-0'>
                <Command>
                    <CommandInput placeholder='Search by cathegory...' className='h-9' onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const selectedCategory = categories.find((c) =>
                                c.title?.toLocaleLowerCase().includes(e.currentTarget.value.toLocaleLowerCase()))
                        }
                    }} />
                    <CommandList>
                        <CommandEmpty>No category foung</CommandEmpty>
                        <CommandGroup>
                            {categories?.map((cathegory) => (
                                <CommandItem
                                    key={cathegory?._id}
                                    value={cathegory?.title}
                                    onSelect={()=>{
                                        setValue(value===cathegory?._id ? cathegory?._id : '');
                                        router.push(`/categories/${cathegory.slug?.current}`);
                                        setOpen(false);
                                    }}
                                >
                                    {cathegory?.title}
                                    <Check className={cn('ml-auto', value === cathegory?._id ? 'opacity-100': "opacity-0")} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default CategorySelector