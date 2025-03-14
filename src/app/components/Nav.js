import Image from "next/image";

const Nav = () => {
    return (
        <nav className="p-5 border-b border-gray-300 backdrop-blur-xl">
            <ul className="flex justify-left">
                <li className="text-2xl">
                    <Image
                        src="/logo.png"
                        alt="Logo GRI"
                        width={90}
                        height={90}
                        priority
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
