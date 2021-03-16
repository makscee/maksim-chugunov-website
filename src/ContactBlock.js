import React from 'react'
import { Button, CardTitle } from 'reactstrap'
import TelegramLogo from './assets/icons/telegram.svg'
import MailLogo from './assets/icons/mail.svg'
import VkLogo from './assets/icons/vk.svg'

export const ContactBlock = ({ onClick }) => {
    return (
        <div className="email-form">
            <h2>Follow<br />or contact me</h2>
            <div className="contact-logos">
                <a href="mailto:maksim.chugunov.c@gmail.com"><img src={MailLogo} alt="Mail Logo" /></a>
                <a href="https://t.me/Maks_C" rel="noreferrer" target="_blank"><img src={TelegramLogo} alt="Telegram Logo" /></a>
                <a href="https://vk.com/squarefast" rel="noreferrer" target="_blank"><img src={VkLogo} alt="VK Logo" /></a>
            </div>
            <Button onClick={onClick}>Subscribe to mailing list</Button>
        </div>
    )
}
