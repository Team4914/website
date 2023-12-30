import { getCollection } from 'astro:content'

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
		.slice(0, max)
}

export const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}