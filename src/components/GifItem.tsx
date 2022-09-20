
export const GifItem = ({ title, url, id }: any) => {

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 p-2">
      <img 
        src={url} 
        alt={title} 
        className="object-cover h-60 w-full rounded-lg transition-shadow ease-in-out duration-1000 scale-90 hover:scale-100"
      />
      <p>{title}</p>
    </div>


  )
}
