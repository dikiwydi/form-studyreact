function Card({ children }) {
    return (
        <div className=" shadow rounded-lg overflow-hidden  text-black w-3/6 bg-white ">
            {children}
        </div>
    );
}

function Title({ children }) {
    return (
        <div className="border-b-2 p-4 ">
            <h1 className="text-2xl font-semibold text-black  ">{children}</h1>
        </div>
    );
}
function Body({ children }) {
    return <div className="leading-relaxed px-4 py-2">{children}</div>;
}
function Footer({ children }) {
    return <div className="bg-slate-50 p-4">{children}</div>;
}
Card.Title = Title;
Card.Footer = Footer;
Card.Body = Body;

export default Card;
