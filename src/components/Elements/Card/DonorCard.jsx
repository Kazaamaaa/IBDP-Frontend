// eslint-disable-next-line react/prop-types
const DonorCard = ({ icon, description }) => {
    return (
      <div className="col-span-12 md:col-span-3 flex justify-center text-center">
        <div className="flex gap-4">
          <div className="flex flex-col justify-end gap-3 max-w-[200px]">
            <img src={icon} width={165} height={93} alt={description} className=" mx-auto mt-4" />
            <h3 className="font-bold text-xl">{description}</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default DonorCard;
  