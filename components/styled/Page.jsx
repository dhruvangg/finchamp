export function Page({ children, className, ...rest }) {
    return <div className={`min-h-[80vh] ${className}`} {...rest}>
        {children}
    </div>
}
