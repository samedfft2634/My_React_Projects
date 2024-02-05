// NewBlog.js
import React from "react";
import BlogForm from "../components/blog/BlogForm";
import useBlogCalls from "../hooks/useBlogCalls";

const NewBlog = () => {
	const { postBlog } = useBlogCalls();
	const handleSubmit = (blogData) => {
		postBlog(blogData);
	};
	return (
		<BlogForm blogDetails={false} handleSubmit={handleSubmit} />
	);
};

export default NewBlog;
