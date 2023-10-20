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
        subtitle: "Understand different kinds of investments and their benefits and drawbacks. Determine which type of investment is most suited to achieving your goal of earning a decent return.",
        url: "/investment"
    }, {
        img: "/assets/insurance.svg",
        title: "Insurance",
        subtitle: "Learn what factors should be considered when purchasing insurance among the numerous alternatives available.",
        url: "/insurance"
    }, {
        img: "/assets/calculation.svg",
        title: "Calculators",
        subtitle: "Various calculators help you in calculating expected returns for various investment options and planning your investment appropriately.",
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
        subtitle: "વિવિધ પ્રકારના રોકાણ અને તેના ફાયદા અને ખામીઓ સમજો. યોગ્ય વળતર મેળવવાના તમારા ધ્યેયને હાંસલ કરવા માટે કયા પ્રકારનું રોકાણ સૌથી વધુ યોગ્ય છે તે નક્કી કરો.",
        url: "/investment"
    }, {
        img: "/assets/insurance.svg",
        title: "ઇન્સ્યોરન્સ",
        subtitle: "ઉપલબ્ધ અસંખ્ય વિકલ્પોમાંથી વીમો ખરીદતી વખતે કયા પરિબળો ધ્યાનમાં લેવા જોઈએ તે જાણો.",
        url: "/insurance"
    }, {
        img: "/assets/calculation.svg",
        title: "કેલ્ક્યુલેટર",
        subtitle: "વિવિધ કેલ્ક્યુલેટર તમને વિવિધ રોકાણ વિકલ્પો માટે અપેક્ષિત વળતરની ગણતરી કરવામાં અને તમારા રોકાણનું યોગ્ય આયોજન કરવામાં મદદ કરે છે.",
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