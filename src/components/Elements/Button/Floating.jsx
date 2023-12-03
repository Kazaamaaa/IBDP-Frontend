// eslint-disable-next-line react/prop-types
const FloatingButton = ({ onClick }) => {
    return (
      <button
        className="fixed bottom-8 right-8 px-4 py-2 bg-red-500 text-white rounded-full border-2 border-black"
        onClick={onClick}
      >
        <p className="font-bold text-xl">+</p>
      </button>
    );
};

export default FloatingButton