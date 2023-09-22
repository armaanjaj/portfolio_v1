import Head from "next/head";

function Meta({
    title = "Armaan Jaj | Software Developer",
    keywords = "web dev, web development, web development articles, web development blogs, web development portfolio, portfolio website",
    description = "Armaan Singh Jaj is a Full stack web developer and designer who specializes in building exceptional digital experiences and this particular portfolio project is designed and built by Armaan Jaj.",
    seoTitle = "Armaan Jaj | Software Developer",
    seoDescription = "Armaan Singh Jaj is a Full stack web developer and designer who specializes in building exceptional digital experiences and this particular portfolio project is designed and built by Armaan Jaj.",
    seoURL = "https://www.armaancodes.com/",
    seoImage = "https://user-images.githubusercontent.com/113659942/231727880-4a93c014-a9a6-4071-9920-c7b66ba4ab9a.png",
    twitterCreator = "armaanjaj",
    theme = "#08001A"
}) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content={theme} />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />

            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={seoURL} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />

            <meta
                name="google-site-verification"
                content="MmVd2jx28g4STBoysHpnkBesTWl3Az7y-LEI44m87WY"
            />

            <meta charSet="utf-8" />
            <link rel="canonical" href="https://www.armaancodes.com/" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
}

export default Meta;
