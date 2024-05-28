
const SectionTitle = ({heading, subHading, headingStyle }) => {
    return (
        <div className="text-center max-w-sm mx-auto">
            <p className="text-secondary mb-4 text-xl italic">---{subHading}---</p>
            <h3 style={headingStyle} className="uppercase border-y-4 border-gray-200 py-4 mb-14">{heading}</h3>
        </div>
    );
};

export default SectionTitle;