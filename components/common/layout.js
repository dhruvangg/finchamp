import Footer from "./Footer";


export default function Layout({ children }) {
    return <div className="body-wrapper">
        {children}
        <Footer />
    </div>;
}