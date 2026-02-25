import { ReCAPTCHA } from 'react-google-recaptcha';

type Props = {
    googleRecaptchaKey: string,
    onChange: (token: string | null) => void
}

export function Recaptcha(props: Props) {
    if (!props.googleRecaptchaKey || !props.onChange) {
        return null;
    }

    return <ReCAPTCHA
        sitekey={props.googleRecaptchaKey}
        onChange={props.onChange}
    />
}
