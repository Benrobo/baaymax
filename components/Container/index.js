
export default function Container({ children }) {
    return (
        <div className={` w-full mx-auto md:w-[80%] `}>
            {children}
        </div>
    )
}
