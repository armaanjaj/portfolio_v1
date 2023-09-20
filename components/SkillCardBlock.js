import React from "react";
import {
    ReactOriginal,
    NextjsOriginal,
    TailwindcssPlain,
    JavascriptOriginal,
    MaterialuiOriginal,
    NodejsOriginal,
    ExpressOriginal,
    MysqlOriginal,
    MongodbOriginal,
    JavaOriginal,
    KotlinOriginal,
    COriginal,
    PythonOriginal,
    PhpOriginal,
    GithubOriginal,
    GitOriginal,
    FigmaOriginal,
    TypescriptOriginal
} from "devicons-react";

function SkillCardBlock({ icon, name }) {
    let IconComponent = null;
    switch (icon) {
        case "ReactOriginal":
            IconComponent = ReactOriginal;
            break;
        case "NextjsOriginal":
            IconComponent = NextjsOriginal;
            break;
        case "TailwindcssPlain":
            IconComponent = TailwindcssPlain;
            break;
        case "JavascriptOriginal":
            IconComponent = JavascriptOriginal;
            break;
        case "MaterialuiOriginal":
            IconComponent = MaterialuiOriginal;
            break;
        case "NodejsOriginal":
            IconComponent = NodejsOriginal;
            break;
        case "ExpressOriginal":
            IconComponent = ExpressOriginal;
            break;
        case "MysqlOriginal":
            IconComponent = MysqlOriginal;
            break;
        case "MongodbOriginal":
            IconComponent = MongodbOriginal;
            break;
        case "JavaOriginal":
            IconComponent = JavaOriginal;
            break;
        case "KotlinOriginal":
            IconComponent = KotlinOriginal;
            break;
        case "PythonOriginal":
            IconComponent = PythonOriginal;
            break;
        case "PhpOriginal":
            IconComponent = PhpOriginal;
            break;
        case "COriginal":
            IconComponent = COriginal;
            break;
        case "GithubOriginal":
            IconComponent = GithubOriginal;
            break;
            break;
        case "GitOriginal":
            IconComponent = GitOriginal;
            break;
        case "FigmaOriginal":
            IconComponent = FigmaOriginal;
            break;
        case "TypescriptOriginal":
            IconComponent = TypescriptOriginal;
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-row justify-evenly items-center gap-4 p-4 rounded-[5px] bg-[#350078]">
            {IconComponent && (
                <div>
                    <IconComponent className="scale-[150%]" />
                </div>
            )}
            <div>{name}</div>
        </div>
    );
}

export default SkillCardBlock;
