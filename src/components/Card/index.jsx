export const Card = ({ title, img, description, link }) => {
    return (
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg flex flex-col max-w-[280px] mx-auto">
            <div className="w-full overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-4 flex-grow">
                <h2 className="text-xl font-bold mb-2 text-red-600">{title}</h2>
                <p className="text-gray-700 mb-4">
                    {description}
                </p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition"
                >
                    Instagram
                </a>
            </div>
        </div>
    )
}