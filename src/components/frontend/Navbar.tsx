export default function Navbar() {
    return (
        <div className="flex bg-gray-800 py-2 px-5">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5">
                <li className="mr-3 cursor-pointer">Home</li>
                <li className="mr-3">About</li>
                <li className="mr-3">Profile</li>
                <li className="mr-3">Contact</li>
            </ul>
        </div>
    )
}