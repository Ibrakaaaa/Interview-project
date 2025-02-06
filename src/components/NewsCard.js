import React from "react";
import { Link } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const NewsCard = ({ title, description, urlToImage, id, section }) => {
  const { state, dispatch } = useNewsContext();
  const { favorites } = state;

  function toggleFavorites() {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id } });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { title, description, urlToImage, id, section },
      });
    }
  }

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-[800px] min-h-[460px]">
      <img
        className="w-full h-[300px] object-cover rounded-md"
        src={urlToImage || "https://via.placeholder.com/800x460"}
        alt={title}
      />
      <h2 className="text-lg md:text-md sm:text-sm font-semibold mt-2">
        <Link to={`/news/${id}`} className="text-blue-600 hover:underline">
          {title}
        </Link>
      </h2>
      <h3 className="text-md md:text-sm sm:text-xs">{section}</h3>
      {isFavorite ? (
        <FaHeart className="text-red-500 text-lg sm:text-2xl md:text-base lg:text-base"
          onClick={toggleFavorites}
        ></FaHeart>
      ) : (
        <FaRegHeart className="text-red-500 text-lg sm:text-2xl md:text-base lg:text-base"
          onClick={toggleFavorites}
        ></FaRegHeart>
      )}

      <p className="text-sm md:text-xs sm:text-[10px] text-gray-600 mt-2">
        {description
          ? description.slice(0, 80) + "..."
          : "No description available"}
      </p>
    </div>
  );
};

export default NewsCard;
