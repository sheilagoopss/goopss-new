import Image from "next/image";

interface CustomCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const CustomCard = ({
  title,
  description,
  image,
  className,
}: CustomCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-4 p-10 w-[40ch] rounded-3xl ${className}`}
    >
      <Image src={image} alt={title} width={200} height={200} />
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-lg text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
