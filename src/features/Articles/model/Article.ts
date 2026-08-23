
export type ArticleMetadata = {
	name: string;
	date: string;
	tags: string[];
}

export type ArticleModel = {
	meta: ArticleMetadata;
	body: string;
}

