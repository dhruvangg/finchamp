export const SSY_RATE = 8

export const LANGUAGES = [{
    value: "en", 
    label: "English"
}, {
    value: "gu",
    label: "ગુજરાતી"
}]

export const server = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://finchamp.vercel.app';