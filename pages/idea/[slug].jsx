import React from "react";
import Navigation from "@/components/blogs/Navigation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import LoaderFS from "@/components/Loaders/Loader-FS";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import { CodeBlock } from "react-code-blocks";

export default function BlogSlugPage() {
    const router = useRouter();

    const mode = useSelector((state) => state.darkMode);

    const [blogData, setBlogData] = React.useState([]);
    const [slug, setSlug] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    let codeIndex = 0;

    const blog = useAxios({
        method: "get",
        url: `/api/getBlog?slug=${slug}`,
        headers: JSON.stringify({ accept: "*/*" }),
    });

    React.useEffect(() => {
        if (!router.isReady) return;

        setLoading(true);
        setSlug(router.query.slug);

        if (blog.response !== null) {
            setBlogData(blog.response);
            document.title = `${blogData.head} | !dea | armaancodes.com`;
            setLoading(false);
        }
    }, [router.isReady, router.query, blog]);

    const writeCode = (index) => {
        let code = "";
        {
            blogData.sections &&
                blogData.sections.forEach((section) => {
                    {
                        section.code &&
                            section.code?.map((line) => {
                                if (
                                    line === "false" ||
                                    codeIndex < parseInt(line)
                                ) {
                                    return code;
                                } else {
                                    code += line + "\n";
                                }
                            });
                    }
                });
        }
        codeIndex = index;
        return code;
    };

    return (
        <>
            <div
                className="text-black h-full min-h-screen"
                style={{ background: `${mode.bg}`, color: `${mode.text}` }}
            >
                <Navigation />
                <div className="w-full h-full smallMobile:px-0 mobile:px-0 tablet:px-5 laptop:px-32 desktop:px-40 largeDesktop:px-52 pt-[calc((4.5rem+2rem))] pb-8 min-h-screen">
                    <div className="flex flex-col justify-start items-center px-10 smallMobile:border-x-0 mobile:border-x-0 tablet:border-x-[0.05rem] laptop:border-x-[0.05rem] desktop:border-x-[0.05rem] largeDesktop:border-x-[0.05rem] border-gray-300 gap-5 min-h-screen">
                        <h1 className="font-extrabold text-3xl">
                            {blogData?.head}
                        </h1>
                        <div>
                            {blogData?.images && (
                                <Image
                                    src={
                                        "/blogs/" +
                                        blogData?.link.slice(1) +
                                        blogData?.images[0].headImage.src
                                    }
                                    alt={blogData?.images[0].headImage.alt}
                                    width={600}
                                    height={400}
                                    className="object-cover w-fit h-fit"
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div>{blogData?.opening}</div>
                        <div className="flex flex-col justify-start items-start gap-10">
                            {blogData.sections?.map((section, i) => (
                                <article
                                    key={i}
                                    className="min-w-full flex flex-col justify-start items-stretch gap-3"
                                >
                                    <div className="font-bold text-lg">
                                        {section.section}
                                    </div>
                                    <div>{section.content}</div>
                                    {section.list && (
                                        <ol>
                                            {section.list?.map(
                                                (listItem, i) => (
                                                    <li key={i}>
                                                        {i + 1 + ". "}
                                                        <span className="font-bold">
                                                            {listItem.head}
                                                        </span>{" "}
                                                        {listItem.content}
                                                    </li>
                                                )
                                            )}
                                        </ol>
                                    )}
                                    {section.ol &&
                                        section.ol?.map((item, i) => (
                                            <ul key={i}>
                                                {item.ol ? (
                                                    item.ol?.map(
                                                        (innerItem, j) => (
                                                            <li key={j}>
                                                                &#9679;{" "}
                                                                {innerItem}
                                                            </li>
                                                        )
                                                    )
                                                ) : (
                                                    <li>&#9679; {item}</li>
                                                )}
                                            </ul>
                                    ))}
                                    {section.code && (
                                        <CodeBlock
                                            text={section.code.join("\n")}
                                            language="kotlin"
                                            theme={"atom-one-dark"}
                                            showLineNumbers={false}
                                            codeBlock={{
                                                lineNumbers: false,
                                                wrapLines: true,
                                            }}
                                            wrapLongLines
                                        />
                                    )}
                                    {section.explanation &&
                                        section.explanation?.map((item, i) => (
                                            <>
                                                <h5 key={i}>{item.head}</h5>
                                                <ul>
                                                    {item.ol?.map(
                                                        (liItem, i) => (
                                                            <li key={i}>
                                                                &#9679; {liItem}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </>
                                        ))}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {loading && <LoaderFS />}
        </>
    );
}
