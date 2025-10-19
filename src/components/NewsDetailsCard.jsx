import React from "react";
import { FaTag, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  if (!news) return null;

  const {
    category_id,
    title,
    author = {},
    thumbnail_url,
    details,
    tags = [],
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Thumbnail Image */}
      {thumbnail_url && (
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-80 object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-2xl font-bold text-gray-800 leading-tight">
          {title}
        </h2>

        {/* Author Section */}
        {author?.name && (
          <div className="flex items-center gap-3 mt-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <h3 className="font-medium text-gray-700">{author?.name}</h3>
              <p className="text-sm text-gray-500">
                {author?.published_date
                  ? new Date(author.published_date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  : "Unknown date"}
              </p>
            </div>
          </div>
        )}

        {/* Details */}
        <p className="text-gray-600 mt-4 leading-relaxed">{details}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline text-sm flex items-center gap-1"
              >
                <FaTag className="text-gray-500" /> {tag}
              </span>
            ))}
          </div>
        )}

        {/* Category Button */}
        <div className="mt-6 flex justify-start">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-secondary text-white flex inline-flex items-center gap-2"
          >
            <FaArrowLeft /> Back to category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
