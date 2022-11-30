export function Container({ children, className }) {
    return <div className={`px-4 xl:p-0 md:container ${className || ''}`} >
        {children}
    </div>
}
