import { EnrichedMarkdownText } from 'react-native-enriched-markdown';
import { Linking, View, StyleSheet } from 'react-native';
import { ArticleModel } from '../model/Article';
import ArticleHeader from './ArticleHeader';

type ArticleProps = {
	article: ArticleModel,
}

const Article = ({article}: ArticleProps) => {
	return (
		<View 
			style={styles.scroll} 
			>
			<ArticleHeader articleMeta={article.meta} />
			<EnrichedMarkdownText
				markdown={article.body}
				onLinkPress={({ url }) => Linking.openURL(url)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	content: {
		paddingBottom: 32,
	},
})

export default Article;
