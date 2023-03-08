function PlaceContentCenter({ children }) {
    return (
        <div className="bg-slate-300">
            <div className=" min-h-screen flex justify-center items-center text-black antialiased tracking-tighter">
                <div className="border-red-900   w-full flex justify-center items-center gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PlaceContentCenter;
