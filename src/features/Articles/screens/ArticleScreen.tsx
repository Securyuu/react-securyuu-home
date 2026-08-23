import BrandText from "@/shared/branding/BrandText"
import ArticleContainer from "../components/ArticleContainer"
import { loadArticle } from "../lib/ArticleLocator"
import { useEffect, useState } from "react"
import { ArticleModel } from "../model/Article"
import Article from "../components/Article"
import { StyleSheet, View } from "react-native"

type ArticleScreenProps = {
	articleId: string
	articlePath: string
}

const ArticleScreen = (p: ArticleScreenProps) => {
	const [article, setArticle] = useState<ArticleModel | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let cancelled = false;

		setIsLoading(true);
		setArticle(null);

		loadArticle(p.articlePath)
			.then((article) => {
				if (!cancelled) {
					setArticle(article)
				}
			})
			.finally(() => {
				if (!cancelled) {
					setIsLoading(false)
				}
			})
		;

		return () => {
			cancelled = true
		}
	}, [p.articlePath])

	return (
		<View style={styles.screen}>
			<ArticleContainer>
				{!isLoading && <Article article={article!} /> }
				{isLoading && <BrandText text="loading..."/> }

			</ArticleContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	}
})

export default ArticleScreen;
