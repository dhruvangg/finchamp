const en = {
    title: "FinChamp",
    banner: {
        title: {
            fixed: "Learn about",
            options: ['Investment', 'Planning', 'Mutual Fund']
        },
        subtitle: "A perfect solution for growing salaried person who has less/no idea about financial terms.",
        img: "/assets/banner.svg",
        CTA: {
            label: 'Getting Started',
            type: 'url',
            url: '/contact'
        }
    },
    services: [{
        img: "/assets/investments.svg",
        title: "Investment",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/investment"
    }, {
        img: "/assets/insurance.svg",
        title: "Insurance",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/insurance"
    }, {
        img: "/assets/calculation.svg",
        title: "Calculators",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/calculators"
    }]
}
const gu = {
    title: "FinChamp",
    banner: {
        title: {
            fixed: "જાણો",
            options: ['ઇન્વેસ્ટમેન્ટ', 'પ્લાનિંગ', 'મ્યુચુઅલ ફંડ']
        },
        subtitle: "પગારદાર વ્યક્તિ માટે એક સંપૂર્ણ ઉકેલ કે જેને નાણાકીય વિગતો વિશે ઓછો/કોઈ ખ્યાલ નથી.",
        img: "/assets/banner.svg",
        CTA: {
            label: 'શરૂ કરો',
            type: 'url',
            url: '#'
        }   
    },
    services: [{
        img: "/assets/investments.svg",
        title: "ઇન્વેસ્ટમેન્ટ",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/investment"
    }, {
        img: "/assets/insurance.svg",
        title: "ઇન્સ્યોરન્સ",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/insurance"
    }, {
        img: "/assets/calculation.svg",
        title: "કેલ્ક્યુલેટર",
        subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
        url: "/calculators"
    }]
}

export default async function handler(req, res) {
    const { locale } = req.query
    const option = {
        'gu': gu,
        'en': en
    }
    res.status(200).json(option[locale || 'en'])
}

// {
//     img: "/assets/savings.svg",
//     title: "taxation",
//     subtitle: "Income tax calculation, File IT Return and ways of tax saving.",
//     url: "/taxation"
// }