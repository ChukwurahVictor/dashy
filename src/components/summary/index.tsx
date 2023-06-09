interface PropTypes {
    path: string;
    count: number;
}
const Summary = ({ path, count }: PropTypes) => {
    return (
        <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">Total {path}</div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        {count}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
