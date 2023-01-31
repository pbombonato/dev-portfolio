import React from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';

function Contact(props) {
    return (
        <section className="container-fluid align-items-center justify-content-center pt-0 pb-5" id="contact">
            <div className="col-12 text-center">
                <h2 className="mb-4">Interessado em trabalhar comigo?</h2>
                <p>Estou sempre aberto a discutir novas ideias e oportunidades.</p>
                <a 
                    href='mailto:pablo.h.bombonato@gmail.com'
                    target='_blank'
                    rel='noopener'
                    aria-label='email'
                    className="btn contact-btn my-5">
                       <AddCommentIcon />&nbsp;
                       Comece uma conversa
                </a>
            </div>
        </section>
    )
}

export default Contact