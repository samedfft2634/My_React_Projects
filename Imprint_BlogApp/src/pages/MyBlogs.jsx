import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import MyBlogCard from "../components/blog/MyBlogCard";

const MyBlogs = () => {
	const { getUserBlogs } = useBlogCalls();
	useEffect(() => {
		getUserBlogs();
	}, []);
	return <MyBlogCard />;
};

export default MyBlogs;
