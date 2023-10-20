export default function Page({ children, className, ...rest }) {
    return <div className={`min-h-[70vh] py-12 ${className}`} {...rest}>
        {children}
    </div>
}
