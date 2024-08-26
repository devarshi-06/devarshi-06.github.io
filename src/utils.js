export const get_image_url = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href
}

