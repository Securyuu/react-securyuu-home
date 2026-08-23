import { StyleSheet, View } from "react-native"
import { ArticleMetadata } from "../model/Article"
import BrandText from "@/shared/branding/BrandText"
import Badge from "@/shared/ui/Badge"

type ArticleHeaderProps = {
	articleMeta: ArticleMetadata
}

const ArticleHeader = ({articleMeta}: ArticleHeaderProps) => {
	return (
		<View style={styles.header}>
			<BrandText text={articleMeta.name} style={styles.title} />
			<BrandText text={articleMeta.date} style={styles.date} />
			<View style={styles.header2}>
				{articleMeta.tags.map(tag => 
															<Badge key={tag} text={tag} />
														 )}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		paddingVertical: 32,
		gap: 16,
	},
	title: {
		textAlign: "center",
		fontSize: 60,
		fontWeight: 800,
		letterSpacing: -0.25,
		lineHeight: 68,
	},
	date: {
		textAlign: "center",
	},
	header2: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: 8,
	}
})

export default ArticleHeader;
