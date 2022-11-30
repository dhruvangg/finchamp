import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '../styled/Container';

const convertBreadcrumb = string => {
    return string.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü')
};

export const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav className="py-5 rounded-md w-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={i}>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                {i !== breadcrumbs.length - 1 ? <Link href={breadcrumb.href} className="capitalize ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">{convertBreadcrumb(breadcrumb.breadcrumb)}</Link> : <span className="capitalize ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">{convertBreadcrumb(breadcrumb.breadcrumb)}</span>}
                            </div>
                        </li>
                    )
                })}
            </ol>
        </nav>
    );
};
