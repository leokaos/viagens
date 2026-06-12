
export interface NoEntriesBlockProps {
    icon: string,
    message: string
}

const NoEntriesBlock = ({ icon, message }: NoEntriesBlockProps) => {

    return (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
            <i className={`pi ${icon} pi-map-marker text-6xl text-gray-300 mb-4`}></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{message}</h3>
        </div>
    )

};

export default NoEntriesBlock;