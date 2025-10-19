import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating, tags } =
    news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-base-200 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-base-content">
              {author.name}
            </h3>
            <p className="text-xs text-base-content/60">{publishedDate}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm">
            <FaRegBookmark
              size={18}
              stroke="3"
              className="text-base-content/60 hover:text-base-content"
            />
          </button>
          <button className="btn btn-ghost btn-sm">
            <FaShareAlt
              size={18}
              className="text-base-content/60 hover:text-base-content"
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold text-base-content hover:text-primary cursor-pointer">
          {title}
          {rating.badge && (
            <div className="badge badge-secondary capitalize">
              {rating.badge}
            </div>
          )}
        </h2>

        <p className="text-sm text-base-content/70">
          {details.length > 180 ? (
            <>
              {details.slice(0, 180)}...{" "}
              <Link to={`/news-details/${id}`} className="text-primary font-medium cursor-pointer">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Tags */}
        <div className="mt-2 space-x-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between items-center px-4 pb-4 border-t border-base-200 pt-2">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-sm text-base-content/70">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-base-content/70 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
