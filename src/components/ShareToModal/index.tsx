import React from "react";
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from 'next-share';
import { EventObject } from "src/api/EventsAPI";

interface ShareToModalProps{
    show: boolean;
    event: EventObject;
    onClose: () => void;
}

export const ShareToModal:React.FC<ShareToModalProps> = ({ show, event, onClose }) => (
    <dialog className="" open={show}>
        <section className="">
            <h3>Share Event with Friends</h3>
            <div className="">
                <EmailShareButton
                    url={event.eventLink}
                    subject={event.title}
                    body={"Join me on "+event.start+" at "+event.location}>
                <EmailIcon size={32} round />
                    <b>Email</b>
                </EmailShareButton>
                <FacebookShareButton
                    url={event.eventLink}
                    quote={'next-share is a social share buttons for your next React apps.'}
                    hashtag={'#ACMUCSD'}>
                <FacebookIcon size={32} round />
                <b>Facebook</b>
                </FacebookShareButton>
            </div>
            <br/>
            <button onClick={onClose}><b>Cancel</b></button>
        </section>
    </dialog>
);
