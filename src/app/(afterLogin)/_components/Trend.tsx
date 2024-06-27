import Link from "next/link";

const count = "text-gray-500 text-sm leading-4 font-light";

function Trend() {
    return (
        <Link
            href={`/search?q=트렌드`}
            className="py-3 px-4 block hover:bg-black hover:bg-opacity-[0.03]"
        >
            <div className={count}>실시간트렌드</div>
            <div className="text-base font-bold leading-5 mt-0.5 mb-1">제로초</div>
            <div className={count}>1,234 posts</div>
        </Link>
    );
}

export default Trend;
