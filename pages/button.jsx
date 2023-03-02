function Button(props) {
    const { className = "bg-black", tombol, children } = props;
    return (
        <button
            {...props}
            className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 px-4 py-2 rounded text-white font-bold`}
        >
            {props.tombol || props.children}
        </button>
    );
}

export default Button;
