import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '95jz6gzw',
    dataset: 'production',
    apiVersion: '2024-02-02',
    useCdn: true,
})

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}