import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchFail,
	fetchStart,
	getBlogDetailSuccess,
	getCategorySuccess,
	getUserBlogSuccess,
	postCommentSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { getBlogSuccess } from "../features/blogSlice";
import { useParams } from "react-router-dom";

const useBlogCalls = () => {
	const { axiosWithToken, axiosPublic } = useAxios();
	const dispatch = useDispatch();
	const { id } = useParams();
	const {
		user: { _id },
	} = useSelector((state) => state.auth);
	// console.log(_id)
	const { pagination } = useSelector((state) => state.blog);
	// console.log(pagination);
	const getBlogs = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(url);
			const blogData = data.data;
			const pagination = data.details;
			dispatch(getBlogSuccess({ blogData, pagination }));
			// toastSuccessNotify("Blogs are successfully fetched")
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Blogs can not be fetched!");
			console.log(error);
		}
	};
	const getBlogDetails = async (blogId) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosPublic(`/blogs/${id || blogId}`);
			dispatch(getBlogDetailSuccess(data.data));
			// toastSuccessNotify("Details are successfully fetched")
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("There is an error to show Details !");
			console.log(error);
		}
	};
	const postComment = async (comment) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken.post("/comments/", comment);
			dispatch(postCommentSuccess(data));
			toastSuccessNotify("Comment sent successfully!");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to post comment!");
			console.log(error);
		}
	};
	const postBlog = async (userInfo) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.post("/blogs/", userInfo);
			toastSuccessNotify("New blog added!");
			getBlogs(`/blogs/?page=${pagination?.pages?.current}&limit=6`);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to post new blog!");
			console.log(error);
		}
	};
	const likeBlog = async (blogId) => {
		try {
			await axiosWithToken.post(`/blogs/${blogId}/postLike`);
			getBlogs(`/blogs/?page=${pagination?.pages?.current}&limit=6`);
			getBlogDetails(blogId);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to like the blog!");
			console.log(error);
		}
	};
	const putBlog = async (userInfo) => {
		try {
			await axiosWithToken.put(`/blogs/${id}`, userInfo);
			toastSuccessNotify("Blog successfully updated!");
			getBlogs(`/blogs/?page=${pagination?.pages?.current}&limit=6`);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to update the blog!");
			console.log(error);
		}
	};
	const deleteBlog = async (postId) => {
		try {
			await axiosWithToken.delete(`/blogs/${postId}`);
			toastSuccessNotify("Blog was successfully deleted!");
			getBlogs(`/blogs/?page=${pagination?.pages?.current}&limit=6`);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to deleting blog!");
			console.log(error);
		}
	};
	const getCategories = async () => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken("/categories/");
			dispatch(getCategorySuccess(data));
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Failed to show categories!");
			console.log(error);
		}
	};
	const getUserBlogs = async () => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`/blogs?author=${_id}`);
			dispatch(getUserBlogSuccess(data.data));
			// toastSuccessNotify("User blogs successfully fetched!")
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("There is an error to show user blogs !");
			console.log(error);
		}
	};
	return {
		getCategories,
		getBlogs,
		getBlogDetails,
		postComment,
		postBlog,
		getUserBlogs,
		deleteBlog,
		putBlog,
		likeBlog,
	};
};

export default useBlogCalls;
