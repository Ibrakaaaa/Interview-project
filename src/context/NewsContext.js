import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  // State under is for the News Logic
  news: [],
  loading: true,
  error: null,
  currentPage: 1,
  itemsPerPage: 6,
  newsCategory: "All",
  favorites: [],
  // State under is for the Weather Logic
  weather: null,
  weatherLoading: true,
  weatherError: null,
  // Mobile Hamburger Icon toggle
  hamburgerIconOpen: false,

};

function newsReducer(state, action) {
  switch (action.type) {
    // cases under are for the news logic
    case "SET_NEWS":
      return { ...state, news: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "NEXT_PAGE":
      const totalPages = Math.ceil(state.news.length / state.itemsPerPage);
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, totalPages),
      };
      case "PREVIOUS_PAGE":
        return {
          ...state,
          currentPage: Math.max(state.currentPage - 1,1)
        }
    case "SET_CATEGORY":
      return { ...state, newsCategory: action.payload };
    case "ADD_FAVORITE":
      if (state.favorites.some((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      // cases under are for the weather logic
      case "SET_WEATHER_LOADING":
        return {...state, weatherLoading: true}
        case "SET_WEATHER":
          return {...state, weather: action.payload, weatherLoading: false}
          case "SET_WEATHER_ERROR":
            return {...state, weatherError: action.payload, weatherLoading: false}
            // case for toggling the hamburger icon
            case "SET_TOGGLE":
              return {...state, hamburgerIconOpen: !state.hamburgerIconOpen}

    default:
      console.log(action);
      return state;
  }
}

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}

export const useNewsContext = () => {
  return useContext(NewsContext);
};
