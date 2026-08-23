import { Asset } from "expo-asset";
import { File } from "expo-file-system";
import { ArticleMetadata, ArticleModel } from "../model/Article";
import { Platform } from "react-native";
import YAML from "yaml";

export const loadArticle = async (path: string): Promise<ArticleModel> => {
	const assetContent = getAssetContent(path);

	return parseMarkdown(await assetContent)
}

const getAssetContent = async (path: string): Promise<string> => {
	const asset = Asset.fromModule(path)

	await asset.downloadAsync()

	if (Platform.OS === "web") {
		const response = await fetch(asset.uri);

		if (!response.ok) {
			throw new Error("Asset could not be loaded");
		}

		return response.text();
	}

	if (!asset.localUri) {
		throw new Error("Asset could not be located");
	}

	const file = new File(asset.localUri);
	const content = file.text()

	return content
}

const parseMarkdown = (body: string): ArticleModel => {
	const pattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/
	const match = body.match(pattern)

	if (!match) {
		throw new Error("failed to parse article")
	}

	const [, frontMatterStr, articleStr] = match

	return {
		meta: parseFrontMatterYaml(frontMatterStr),
		body: articleStr
	}
}

const parseFrontMatterYaml = (frontMatterStr: string): ArticleMetadata => {
	const parsed = new Map(Object.entries(YAML.parse(frontMatterStr) as Record<string, string | string[]>));

	const formattedDate = new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(readString(parsed, "date")));

	return {
		name: readString(parsed, "name"),
		date: formattedDate,
		tags: readStringArray(parsed, "tags"),
	}

}

const readString = (map: Map<string, unknown>, key: string): string => {
	const value = map.get(key)

	if (typeof value !== "string") {
		throw new Error(`invalid article metadata: ${key}`)
	}

	return value
}

const readStringArray = (map: Map<string, unknown>, key: string): string[] => {
	const value = map.get(key)

	if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
		throw new Error(`invalid article metadata: ${key}`)
	}

	return value
}

