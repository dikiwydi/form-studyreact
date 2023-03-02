export default function Input({ type = "text", ...props }) {
    return (
        <input
            {...props}
            type={type}
            className="border-slate-500 shadow-lg rounded-lg w-full focus:outline-none  focus:ring focus:ring-blue-200 focus:border-blue-500 transition duration-300"
        />
    );
}
