import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { data, useFetcher, useLoaderData } from 'react-router';
import { Input } from '~/common/components/inputs/Input';
import { Textarea } from '~/common/components/inputs/Textarea';
import { sendMail } from '~/common/features/send-mail';
import type { Route } from './+types/contact';

export async function loader() {
    const googleRecaptchaKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY;
    return { googleRecaptchaKey };
}

export default function Contact() {
    const { googleRecaptchaKey } = useLoaderData<typeof loader>();
    console.log(googleRecaptchaKey);
    const fetcher = useFetcher();
    const [robotChecked, setRobotChecked] = useState(false);

    const submittable =
        robotChecked &&
        fetcher.state !== 'loading' &&
        fetcher.state !== 'submitting';
    const submitted = fetcher.data === 'OK';

    return (
        <section className={'centered-section my-30'}>
            <h1 className={'text-3xl text-center font-bold mb-20'}>
                Prendre contact avec POWERMOUV
            </h1>

            <fetcher.Form method={'POST'}>
                <div
                    className={
                        'flex flex-col items-center gap-4 md:w-1/2 mx-auto'
                    }
                >
                    <Input
                        type={'text'}
                        id={'firstname'}
                        label={'Prénom'}
                        error={fetcher.data?.error}
                    />
                    <Input
                        type={'text'}
                        id={'lastname'}
                        label={'Nom'}
                        error={fetcher.data?.error}
                    />
                    <Input
                        type={'text'}
                        id={'company'}
                        label={'Société'}
                        error={fetcher.data?.error}
                    />
                    <Input
                        type={'text'}
                        id={'job'}
                        label={'Fonction dans la société'}
                        error={fetcher.data?.error}
                    />
                    <Input
                        type={'telephone'}
                        id={'telephone'}
                        label={'Téléphone professionnel'}
                        error={fetcher.data?.error}
                    />
                    <Input
                        type={'telephone'}
                        id={'email'}
                        label={'E-mail professionnel'}
                        error={fetcher.data?.error}
                    />
                    <Textarea
                        id={'message'}
                        label={'Message'}
                        error={fetcher.data?.error}
                    />

                    <div>
                        {!!fetcher.data?.consent && (
                            <span className={'text-red-500'}>
                                Votre consentement est nécessaire pour pouvoir
                                traiter votre prise de contact.
                            </span>
                        )}
                        <label className={'font-semibold'}>
                            <input type={'checkbox'} name={'consent'} />{' '}
                            J&apos;accepte que mes données soient utilisées par
                            POWERMOUV afin de traiter ma demande de contact.
                        </label>
                        <p className={'text-dark text-sm'}>
                            Elles ne seront en aucun cas transmises à des tiers
                            sans mon accord. Vous pouvez exercer vos droits
                            d&apos;accès, de rectification ou de suppression en
                            écrivant à{' '}
                            <a href={'mailto:contact@powermouv.fr'}>
                                contact@powermouv.fr
                            </a>
                        </p>
                    </div>
                </div>
                <div
                    className={
                        'flex flex-col items-center gap-4 w-1/2 mx-auto mt-20'
                    }
                >
                    {!submitted ? (
                        <>
                            <ReCAPTCHA
                                sitekey={googleRecaptchaKey}
                                onChange={(token) => setRobotChecked(!!token)}
                            />
                            <button
                                className={'pm-btn'}
                                type={'submit'}
                                disabled={!submittable}
                            >
                                Envoyer
                            </button>
                        </>
                    ) : (
                        <p>🎉 Bien reçu, merci ! 🎉</p>
                    )}
                </div>
            </fetcher.Form>
        </section>
    );
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const { result, errors } = validateFormData(formData);

    if (Object.keys(errors).length > 0) {
        return data({ errors }, { status: 400 });
    }
    await sendMail(result);
    return data('OK', { status: 200 });
}

function validateFormData(formData: FormData) {
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const company = formData.get('company') as string;
    const job = formData.get('job') as string;
    const telephone = formData.get('telephone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const consent = formData.get('consent') as string;

    const errors: { [prop: string]: boolean } = {};

    if (!firstname || firstname.length === 0) {
        errors.firstname = true;
    }
    if (!lastname || lastname.length === 0) {
        errors.lastname = true;
    }
    if (!company || company.length === 0) {
        errors.company = true;
    }
    if (!job || job.length === 0) {
        errors.job = true;
    }
    if (!telephone || telephone.length === 0) {
        errors.telephone = true;
    }
    if (!email || email.length === 0) {
        errors.email = true;
    }
    if (!message || message.length === 0) {
        errors.message = true;
    }
    if (!consent) {
        errors.consent = true;
    }

    return {
        result: {
            firstname,
            lastname,
            company,
            job,
            telephone,
            email,
            message,
            consent: !!consent,
        },
        errors,
    };
}
