export default async function handler(req, res) {
    res.status(200).json({
        "title": "FinChamp",
        "services": [{
            "img": "/assets/savings.svg",
            "title": "taxation",
            "subtitle": "Income tax calculation, File IT Return and ways of tax saving.",
            "link": "/taxation"
        }, {
            "img": "/assets/savings.svg",
            "title": "taxation",
            "subtitle": "Income tax calculation, File IT Return and ways of tax saving.",
            "link": "/taxation"
        }, {
            "img": "/assets/savings.svg",
            "title": "taxation",
            "subtitle": "Income tax calculation, File IT Return and ways of tax saving.",
            "link": "/taxation"
        }]
    })
}