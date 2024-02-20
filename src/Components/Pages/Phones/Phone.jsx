
const Phone = ({ phone }) => {


    const { id, name, image, price, description } = phone || {};
    return (
        <div className="w-[200px] mx-auto flex justify-center p-5 rounded shadow shadow-gray-400 hover:transform hover:scale-[1.1] transition-all cursor-pointer">
            <section className="space-y-4">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-center font-bold text-gray-500 text-xl">{name}</h1>
                </div>
            </section>
        </div>
    );
};

export default Phone;