import React from "react";
import Navigation from "@/components/blogs/Navigation";
// import Image from "next/image";
import BlogItem from "@/components/blogs/blogItem/BlogItem";
import TopicItem from "@/components/blogs/blogItem/TopicItem";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Page() {
    const router = useRouter();

    const mode = useSelector((state) => state.darkMode);
    const [selectedTopic, setSelectedTopic] = React.useState(null);

    React.useEffect(() => {
        document.title = "!dea - Read all my latest blogs";

        if (!router.isReady) return;

        if (router.query.topic) {
            const topicName = router.query.topic;
            setSelectedTopic(topicName);
        }
    }, [router.isReady, router.query]);

    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        router.push(`/idea?topic=${topic}`);
    };

    const handleDeselectTopic = () => {
        setSelectedTopic(null);
        router.push(`/idea`);
    };

    return (
        <div
            className="text-black h-full"
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
                <div className="flex flex-row justify-evenly items-start w-full p-5">
                    <div className="w-2/3 border-r-[0.05rem] border-gray-300">
                        <div>
                            {/* <div className="font-semibold text-2xl">
                                Latest blogs
                            </div> */}
                            <BlogItem
                                author={"Armaan"}
                                blogHead={
                                    "We're starting to understand more of what causes long COVID brain fog"
                                }
                                blogBody={
                                    "Not only did a new study identify two blood proteins linked to cognitive difficulties a year after COVID-19 infection, but the..."
                                }
                                date={"Sept 18"}
                                image={"/Hero.jpeg"}
                            />
                            <BlogItem
                                author={"Armaan"}
                                blogHead={
                                    "i was nine years-old when i had my first crush"
                                }
                                blogBody={
                                    "Her name was Candice, and she went by Candi. She was my first — and biggest — childhood crush.…"
                                }
                                date={"Sept 13"}
                                image={"/Hero.jpeg"}
                            />
                            <BlogItem
                                author={"Armaan"}
                                blogHead={
                                    "Mastering the Art of Rain Photography"
                                }
                                blogBody={
                                    "Making the best of a rainy day out in nature"
                                }
                                date={"Sept 16"}
                                image={"/Hero.jpeg"}
                            />
                        </div>
                    </div>

                    <div className="w-1/3 pt-3 sticky top-[4.5rem]">
                        <div className="px-5 flex flex-col justify-start items-start gap-2">
                            <div className="font-semibold text-2xl">Topics</div>

                            <div className="py-2 flex flex-row justify-start items-center flex-wrap gap-3">
                                <TopicItem
                                    selected={selectedTopic === "Programming"}
                                    topic={"Programming"}
                                    onSelect={() =>
                                        handleSelectTopic("Programming")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Data Science"}
                                    topic={"Data Science"}
                                    onSelect={() =>
                                        handleSelectTopic("Data Science")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Technology"}
                                    topic={"Technology"}
                                    onSelect={() =>
                                        handleSelectTopic("Technology")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={
                                        selectedTopic === "Self Improvement"
                                    }
                                    topic={"Self Improvement"}
                                    onSelect={() =>
                                        handleSelectTopic("Self Improvement")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Writing"}
                                    topic={"Writing"}
                                    onSelect={() =>
                                        handleSelectTopic("Writing")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Politics"}
                                    topic={"Politics"}
                                    onSelect={() =>
                                        handleSelectTopic("Politics")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Leet Code"}
                                    topic={"Leet Code"}
                                    onSelect={() =>
                                        handleSelectTopic("Leet Code")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={
                                        selectedTopic === "Machine Learning"
                                    }
                                    topic={"Machine Learning"}
                                    onSelect={() =>
                                        handleSelectTopic("Machine Learning")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
