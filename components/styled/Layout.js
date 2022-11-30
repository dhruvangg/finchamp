import { Header, Footer } from "@/components/common";

export function Layout({ children }) {
    return <div className="body-wrapper">
        <Header />
        {children}
        <Footer />
    </div >;
}