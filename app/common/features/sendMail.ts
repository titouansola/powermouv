import nodemailer from 'nodemailer';

type EmailData = {
    firstname: string;
    lastname: string;
    company: string;
    job: string;
    telephone: string;
    email: string;
    consent: boolean;
};

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendMail(data: EmailData) {
    return transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'Vous avez reçu un nouveau message depuis powermouv.fr',
        text: buildText(data),
        html: buildHtml(data),
    });
}

function buildText(data: EmailData) {
    return `Nouveau message reçu depuis le formulaire de contact powermouv.fr.Prénom ${data.firstname} Nom: ${data.lastname} Société: ${data.company} Fonction: ${data.job} Téléphone: ${data.telephone} E-mail: ${data.email}`;
}

function buildHtml(data: EmailData) {
    return `
    <div style="font-family: sans-serif">
        <p>Nouveau message reçu depuis le formulaire de contact powermouv.fr.</p>
        <p>
            <b>Prénom:</b> ${data.firstname}
        </p>
        <p>
            <b>Nom:</b> ${data.lastname}
        </p>
        <p>
            <b>Société:</b> ${data.company}
        </p>
        <p>
            <b>Fontion:</b> ${data.job}
        </p>
        <p>
            <b>Téléphone:</b> ${data.telephone}
        </p>
        <p>
            <b>E-mail:</b> <a href="mailto:${data.email}">${data.email}</a>
        </p>
    </div>
    `;
}
