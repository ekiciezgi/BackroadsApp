import React from 'react'
import { pageLinks, socialLinks } from '../data'
export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((data) => {
                    return (
                        <li>
                            <a href={data.href} className="footer-link">{data.text}</a>
                        </li>
                    );
                })}

            </ul>
            <ul className="footer-icons">
                {socialLinks.map((data) => {
                    return (
                        <li>
                            <a href={data.href} target="_blank" className="footer-icon">
                                <i className={data.icon}></i >
                            </a>
                        </li>
                    );

                })}

            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}
