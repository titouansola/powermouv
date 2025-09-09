import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { data, useFetcher, useLoaderData } from 'react-router';
import { Input } from '~/common/components/inputs/Input';
// import { sendMail } from '~/features/sendMail';
import type { Route } from './+types/contact';

export async function loader() {
    const googleRecaptchaKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY;
    return { googleRecaptchaKey };
}

export default function Contact() {
    const { googleRecaptchaKey } = useLoaderData<typeof loader>();
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
                    className={'flex flex-col items-center gap-4 w-1/2 mx-auto'}
                >
                    <Input type={'text'} id={'firstname'} label={'Prénom'} />
                    <Input type={'text'} id={'lastname'} label={'Nom'} />
                    <Input type={'text'} id={'company'} label={'Société'} />
                    <Input
                        type={'text'}
                        id={'job'}
                        label={'Fonction dans la société'}
                    />
                    <Input
                        type={'email'}
                        id={'telephone'}
                        label={'Téléphone professionnel'}
                    />
                    <Input
                        type={'telephone'}
                        id={'email'}
                        label={'E-mail professionnel'}
                    />

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
    // await sendMail(result);
    return data('OK', { status: 200 });
}

function validateFormData(formData: FormData) {
    const identity = formData.get('identity') as string;
    const email = formData.get('email') as string;
    const telephone = formData.get('telephone') as string;
    const content = formData.get('content') as string;

    const errors: { [prop: string]: boolean } = {};

    if (!identity || identity.length === 0) {
        errors.identity = true;
    }
    if (!telephone || telephone.length === 0) {
        errors.telephone = true;
    }
    if (!email || email.length === 0) {
        errors.email = true;
    }
    if (!content || content.length === 0) {
        errors.content = true;
    }

    return {
        result: {
            identity,
            email,
            telephone,
            content,
        },
        errors,
    };
}
