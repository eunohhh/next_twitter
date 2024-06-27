import SearchForm from "../_components/SearchForm";
import Trend from "../_components/Trend";

function ExplorePage() {
    return (
        <>
            <div>
                <SearchForm />
            </div>
            <div>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </>
    );
}

export default ExplorePage;
