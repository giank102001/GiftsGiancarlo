import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }: any) => {

  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <div className="w-full shadow-xl p-2 bg-slate-50">
        <h1 className="text-3xl font-bold m-5">
          {categoria}
        </h1>
        {isLoading && (<h2>Cargando...</h2>)}
        <div className="w-full flex flex-wrap">
          {
            images.map((image: any) => (
              <GifItem
                key={image.id}
                {...image}
              />
            ))
          }
        </div>
      </div> 
    </>
  )
}
