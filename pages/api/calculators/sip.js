export default function handler(req, res) {
    res.status(200).json({
        "formID": "sip-calculator",
        "fields": [{
            "type": "radio",
            "name": "type",
            "label": "",
            "options": [{
                "label": "SIP",
                "value": "sip"
            }, {
                "label": "Lumpsum",
                "value": "lumpsum"
            }]
        }, {
            "type": "range",
            "name": "amount"
        }]
    })
}
