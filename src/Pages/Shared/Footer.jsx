import React from 'react';

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 rounded-t-md bg-black text-white">
                <aside>
                    <p className="font-extrabold btn btn-ghost text-lg">Juvénia</p>
                    <p>
                        This Product Is Excluded From Site
                        <br />
                        Promotions And Discounts.
                    </p>
                </aside>
                <nav>
                    <h6 className="font-bold text-lg">Menu</h6>
                    <p className="link link-hover">Men</p>
                    <p className="link link-hover">Woman</p>
                    <p className="link link-hover">Kids</p>
                    <p className="link link-hover">Contact</p>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Social</h6>
                    <p className="link link-hover">Facebook</p>
                    <p className="link link-hover">Youtube</p>
                    <p className="link link-hover">Instagram</p>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Help</h6>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Terms of use</p>
                </nav>
            </footer>
                <div className="mt-2 mb-2 w-full text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; 2024 Md Ehsanul Haque Rizvy. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;

