export function Container({ children, className }) {
    return <div className={`md:container ${className || ''}`} >
        {children}
    </div>
}
