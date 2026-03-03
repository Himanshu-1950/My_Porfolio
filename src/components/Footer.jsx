import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-background border-t border-white/10 text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
