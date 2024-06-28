import SearchForm from "../_components/SearchForm";
import Trend from "../_components/Trend";

function ExplorePage() {
    return (
        <section className="w-[600px] border-white border-r-2 border-l-2 flex flex-col items-stretch">
            <div className="w-[566px] mb-[60px] pl-4">
                <SearchForm />
            </div>
            <div className="border-t border-white font-bold mb-3">
                <h3 className="py-3 px-4">나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </section>
    );
}

export default ExplorePage;
