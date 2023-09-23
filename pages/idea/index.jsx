import React from "react";
import Navigation from "@/components/blogs/Navigation";
// import Image from "next/image";
import BlogItem from "@/components/blogs/layouts/BlogItem";
import TopicItem from "@/components/blogs/layouts/TopicItem";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "@/components/Loaders/Loader";
import useAxios from "@/hooks/useAxios";
import Meta from "@/components/Meta";

export default function Page() {
    const router = useRouter();

    const mode = useSelector((state) => state.darkMode);

    const [selectedTopic, setSelectedTopic] = React.useState(null);
    const [blogList, setBlogList] = React.useState([]);
    const [topicList, setTopicList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [topicsDropdown, setTopicsDropdown] = React.useState(false);
    const [queryTopic, setQueryTopic] = React.useState(null);

    const blogs = useAxios({
        method: "get",
        url: "/api/getBlogs",
        headers: JSON.stringify({ accept: "*/*" }),
    });
    const topics = useAxios({
        method: "get",
        url: "/api/getTopics",
        headers: JSON.stringify({ accept: "*/*" }),
    });

    const filteredBlogs = useAxios({
        method: "get",
        url: `/api/getFilteredBlogs?topic=${queryTopic}`,
        headers: JSON.stringify({ accept: "*/*" }),
    });

    React.useEffect(() => {
        document.title = "!dea - Read all my latest blogs | armaancodes.com";

        setSelectedTopic(null);

        setLoading(true);
        if (blogs.response !== null) {
            setBlogList(blogs.response);
        }
        if (topics.response !== null) {
            setTopicList(topics.response);
        }
        
        if (!router.isReady) return;
        
        setQueryTopic(router.query.topic);
        
        if (router.query.topic) {
            const topicName = router.query.topic;
            setSelectedTopic(topicName);

            setBlogList(filteredBlogs.response);
        }
        setLoading(false);
    }, [router.isReady, router.query, blogs, topics]);

    return (
        <>
            <Meta
                title={"!dea | armaancodes.com"}
                seoTitle={"!dea | armaancodes.com"}
                seoURL={"https://www.armaancodes.com/idea"}
                keywords={"web blogs, armaancodes blogs, armaancodes.com blogs, programming blogs, latest blogs, armaan singh jaj software developer blogs, calgary blogs, idea blogs, latest idea blogs, armaancodes.com idea blogs"}
                description={"On Idea blogs encourages learning. Idea blogs present you new fresh blogs on plathora of topics. Read latest blogs on armaancodes.com/idea"}
                seoDescription={"On Idea blogs encourages learning. Idea blogs present you new fresh blogs on plathora of topics. Read latest blogs on armaancodes.com/idea"}
                seoImage={"https://github.com/armaanjaj/portfolio_v2/assets/113659942/d9453b3c-5259-453d-9320-6ccbbeca3a04"}
                twitterCreator={"https://github.com/armaanjaj/portfolio_v2/assets/113659942/d9453b3c-5259-453d-9320-6ccbbeca3a04"}
                theme="#C670DF"
            />
            <div
                className="text-black h-full min-h-screen"
                style={{ background: `${mode.bg}`, color: `${mode.text}` }}
            >
                {/* Page Nav bar */}
                <Navigation />

                {/* Page body */}
                <div className="w-full h-full pt-[4.5rem]">
                    {/* Page banner */}
                    {/* <div className="relative w-full h-0 pb-[20%]">
                    <Image
                        src={"/Hero.jpeg"}
                        alt="Image in the blog section banner"
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div> */}

                    {/* Page section 1 */}
                    <div className="flex flex-row justify-evenly items-start w-full smallMobile:flex-wrap-reverse mobile:flex-wrap-reverse tablet:flex-wrap-reverse laptop:flex-nowrap desktop:flex-nowrap largeDesktop:flex-nowrap py-5 smallMobile:px-5 mobile:px-5 tablet:px-5 laptop:px-5 desktop:px-5 largeDesktop:px-80">
                        <div className=" min-h-screen smallMobile:w-full mobile:w-full tablet:w-full laptop:w-2/3 desktop:w-2/3 largeDesktop:w-2/3 smallMobile:border-0 mobile:border-0 tablet:border-0 laptop:border-r-[0.05rem] desktop:border-r-[0.05rem] largeDesktop:border-r-[0.05rem] border-gray-300">
                            <div>
                                {/* <div className="font-semibold text-2xl">
                                        Latest blogs
                                </div> */}
                                {!loading ? (
                                    blogList?.map((blog, i) => (
                                        <BlogItem
                                            author={blog.author}
                                            topic={blog.topic}
                                            link={blog.link}
                                            blogHead={blog.head}
                                            blogBody={
                                                blog.opening.slice(0, 100) +
                                                "..."
                                            }
                                            date={blog.date}
                                            image={
                                                "/blogs/" +
                                                blog.link.slice(1) +
                                                blog.images[0].headImage.src
                                            }
                                            text={mode.text}
                                            key={i}
                                        />
                                    ))
                                ) : (
                                    <Loader />
                                )}
                            </div>
                        </div>

                        <div className="smallMobile:w-full mobile:w-full tablet:w-full laptop:w-1/3 desktop:w-1/3 largeDesktop:w-1/3 pt-3 smallMobile:relative mobile:relative tablet:relative laptop:sticky desktop:sticky largeDesktop:sticky smallMobile:top-0 mobile:top-0 tablet:top-0 laptop:top-[4.5rem] desktop:top-[4.5rem] largeDesktop:top-[4.5rem]">
                            <div className="px-5 flex flex-col justify-start items-start gap-2">
                                <div className="font-semibold text-2xl flex flex-row justify-between items-center flex-nowrap">
                                    <span>Topics</span>
                                    <span
                                        onClick={() =>
                                            setTopicsDropdown(!topicsDropdown)
                                        }
                                        className="smallMobile:block mobile:block tablet:hidden laptop:hidden desktop:hidden largeDesktop:hidden"
                                    >
                                        {!topicsDropdown ? (
                                            <ArrowDropDownOutlinedIcon />
                                        ) : (
                                            <ArrowDropUpRoundedIcon />
                                        )}
                                    </span>
                                </div>

                                <div
                                    className={`py-2 flex-row justify-start items-center flex-wrap gap-3 ${
                                        !topicsDropdown ? "hidden" : "flex"
                                    } tablet:hidden laptop:hidden desktop:hidden largeDesktop:hidden`}
                                >
                                    {topicList.map((topic) => (
                                        <TopicItem
                                            selected={selectedTopic === topic}
                                            topic={topic}
                                            onDeselect={() => {
                                                router.push(`/idea`);
                                            }}
                                            key={topic}
                                        />
                                    ))}
                                </div>
                                <div className="py-2 flex-row justify-start items-center flex-wrap gap-3 smallMobile:hidden mobile:hidden tablet:flex laptop:flex desktop:flex largeDesktop:flex">
                                    {topicList.map((topic) => (
                                        <TopicItem
                                            selected={selectedTopic === topic}
                                            topic={topic}
                                            onDeselect={() => {
                                                router.push(`/idea`);
                                            }}
                                            key={topic}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
