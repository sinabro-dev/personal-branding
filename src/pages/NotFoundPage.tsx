import React from "react";
import NotFoundError from "../components/NotFoundError";

interface NotFoundPageProps {}

function NotFoundPage(props: NotFoundPageProps) {
    return <NotFoundError />;
}

export default NotFoundPage;
