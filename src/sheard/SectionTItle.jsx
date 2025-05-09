 
const SectionTItle = ({heading, description}) => {
    return (
        <div className="text-center px-2 md:px-0">
            <h2
          className="lg:text-4xl md:text-3xl text-xl font-bold">
          {heading}
        </h2>
        <p className="md:mt-4 mt-2 max-w-lg mx-auto">{description}</p>
        </div>
    );
};

export default SectionTItle;