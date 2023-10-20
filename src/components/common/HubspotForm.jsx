import { useEffect } from "react";

export default function HubspotForm() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "21427242",
                    formId: "77864539-48ac-40f6-aa2a-7a30f0456d4f",
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return <div id="hubspotForm" className="mx-auto max-w-full w-[500px]"></div>
}