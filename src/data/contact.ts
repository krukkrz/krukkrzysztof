export type ContactData = {
    name: string;
    displayLink: string;
    href: string;
}

export const channels: ContactData[] = [
    {
        name: 'github',
        href: 'https://github.com/krukkrz',
        displayLink: 'github.com/krukkrz'
    },
    {
        name: 'medium',
        href: 'https://medium.com/@krzysztof-t-kruk',
        displayLink: 'medium.com/@krzysztof-t-kruk'
    },
    {
        name: 'email',
        displayLink: 'krzysztof.t.kruk@gmail.com',
        href: 'mailto:krzysztof.t.kruk@gmail.com'
    },
    {
        name: 'phone',
        displayLink: '+48 792 232 304',
        href: 'tel:+48792232304'
    }
]