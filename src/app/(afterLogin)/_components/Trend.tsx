import { Hashtag } from "@/model/Hashtag";
import Link from "next/link";

const count = "text-gray-500 text-sm leading-4 font-light";

function Trend({ trend }: { trend: Hashtag }) {
    return (
        <Link
            href={`/search?q=${encodeURIComponent(trend.title)}`}
            className="py-3 px-4 block hover:bg-black hover:bg-opacity-[0.03]"
        >
            <div className={count}>실시간트렌드</div>
            <div className="text-base font-bold leading-5 mt-0.5 mb-1">{trend.title}</div>
            <div className={count}>{trend.count.toLocaleString()} posts</div>
        </Link>
    );
}

export default Trend;
