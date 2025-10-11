export function Textarea({
    id,
    label,
    error,
}: {
    id: string;
    label: string;
    error?: Record<string, boolean>;
}) {
    return (
        <div className={'flex flex-col gap-1 w-full'}>
            <label htmlFor={id} className={'text-sm text-dark'}>
                {label}
            </label>
            {!!error?.[id] && (
                <span className={'text-red-500'}>Ce champ est requis !</span>
            )}
            <textarea
                id={id}
                name={id}
                className={
                    'border border-gray-300 bg-white px-4 py-2 outline-none'
                }
                rows={5}
            ></textarea>
        </div>
    );
}
