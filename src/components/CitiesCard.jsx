import Image from "next/legacy/image";

const CitiesCard = ({ src, alt, cityName }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg">
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
      />
      <div className="absolute bottom-2 left-3 right-15  p-2 text-black text-center bg-white w-[40%] border rounded-lg ">
        <span>{cityName}</span>
      </div>
    </div>
  );
};

export default CitiesCard;
