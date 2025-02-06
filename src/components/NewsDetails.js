import React from "react";
import { useParams, Link } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

export default function NewsDetails() {
  const { "*": id } = useParams();
  const { state } = useNewsContext();

  // Find the news item with the full `id` path
  const news = state.news.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="text-center text-red-500 text-lg">No result found</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* News Image */}
      <img
        className="w-full h-[400px]  rounded-md"
        src={news.fields?.thumbnail || "https://via.placeholder.com/800x460"}
        alt={news.title}
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
        {news.title}
      </h1>

      {/* Published Date */}
      <p className="text-sm sm:text-base text-gray-500 mt-1">
        Published on: {news.publishedAt || "Unknown date"}
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
        {news.description || "No description available"}
      </p>

      {/* Dummy Text */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
        eros eu neque tincidunt, non scelerisque ipsum feugiat. Morbi ut justo
        vitae ante faucibus condimentum. Nam ac nisi vitae neque condimentum
        fermentum. Ut ultricies convallis sapien, eu laoreet metus egestas at.
        Curabitur tempus, felis id scelerisque auctor, elit libero consequat
        leo, ac pharetra ante lectus sed nisi. Praesent tristique euismod nulla,
        vel interdum ligula dapibus at. Nunc sit amet varius purus. Sed volutpat
        urna id lorem posuere, nec feugiat odio sollicitudin. Fusce vehicula
        velit ac risus tincidunt fermentum. Donec tincidunt est quis dui
        maximus.
      </p>

      {/* Back Button */}
      <Link
  to="/"
  className="inline-block mt-6 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
>
  ← Back to News
</Link>
    </div>
  );
}
