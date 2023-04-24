import Head from "next/head";

function Meta({
    title = "Armaan Jaj",
    keywords = "web dev, web development, web development articles, web development blogs, web development portfolio, portfolio website",
    description = "Armaan Singh Jaj is a Full stack web developer and designer who specializes in building exceptional digital experiences. This is a web development portfolio project designed and built by Armaan Jaj.",
}) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#08001A" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://www.armaancodes.com/"/>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
}

export default Meta;
