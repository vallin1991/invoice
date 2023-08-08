export default function Footer({name, email, address, website}) {
    return (
        <>
            <footer>
                <ul className="flex flex-wrap items-center justify-center">
                    <li>
                        <span className="font-bold">Your name:</span>{name}
                    </li>
                    <li>
                        <span className="font-bold">Your email:</span>{email}
                    </li>
                    <li>
                        <span className="font-bold">Phone Number:</span>0712 345 678
                    </li>v
                    <li>
                        <span className="font-bold">Bank:</span> Bank Account
                    </li>
                    <li>
                        <span className="font-bold">Account Number:</span> 123 456 789
                    </li>
                    <li>
                        <span className="font-bold">Website:</span> {" "} 
                        <a href={website}>{website}</a>
                    </li>
                </ul>
            </footer>
        </>
    )
} 