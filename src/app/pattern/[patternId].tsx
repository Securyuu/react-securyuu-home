import { ArticleScreen } from "@/features/Articles";
import { Unmatched, useLocalSearchParams } from "expo-router";

const PatternDetails = () => {
	const {patternId} = useLocalSearchParams<{patternId: string}>()

	if (!paths.has(patternId)) {
		// goto 404
		return <Unmatched />;
	}

	return (
		<ArticleScreen articleId={patternId} articlePath={paths.get(patternId)!}/>
	)
}


// keep it simple :)
const paths = new Map<string, string>();
paths.set("example", require("../../../assets/articles/example.md"));

export default PatternDetails;
