import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory: any) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-full w-full space-y-8">

          <div className="w-full">

            <h1 className="text-5xl font-bold underline">
              GIF's APP
            </h1>
            <AddCategory
              onNewCategory={(value: any) => onAddCategory(value)}
            />
          </div>

          
            {
              categories.map((category: any) => {
                return (
                  <GifGrid
                    key={category}
                    categoria={category}
                  />
                )
              })
            }

        </div>
      </div>
    </>
  )
}
