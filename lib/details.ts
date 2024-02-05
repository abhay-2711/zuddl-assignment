type TypedColumn = "todo" | "inprogress" | "done";

export const boardDetails: { id: string; title: string; status: TypedColumn; image: string }[] = [
    {
        id: "1",
        title: "Search Component",
        status: "todo",
        image: "",
    },
    {
        id: "2",
        title: "Answers in Readme file",
        status: "todo",
        image: "",
    },
    {
        id: "3",
        title: "Go for a walk",
        status: "todo",
        image: "",
    },
    {
        id: "4",
        title: "Todo Component",
        status: "inprogress",
        image: "",
    },
    {
        id: "5",
        title: "Reading 10 pages from the book",
        status: "inprogress",
        image: "",
    },
    {
        id: "6",
        title: "Board Component",
        status: "done",
        image: "",
    },
    {
        id: "7",
        title: "Column Component",
        status: "done",
        image: "",
    },
    {
        id: "8",
        title: "Assignment task",
        status: "done",
        image: "",
    }
];