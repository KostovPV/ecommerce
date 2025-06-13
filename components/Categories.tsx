// import { Category } from '@/sanity.types'
// import React from 'react'

// const Categories = ({categories}:{categories: Category}) => {
//   return (
//     <div>Categories</div>
//   )
// }

// export default Categories

import { Category } from "@/sanity.types";
import React from "react";
interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className="py-5">
      <div>categories</div>
    </div>
  );
};

export default Categories;