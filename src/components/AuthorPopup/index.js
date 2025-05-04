import "./AuthorPopup.css";

const AuthorPopup = ({ authorImage, authorDescription, authorName }) => {
  const hasTooltip = authorImage || authorDescription;

  return (
    <div className="author-info">
      <span
        style={{ cursor: hasTooltip ? "pointer" : "default" }}
        className="author-name"
        onMouseEnter={(e) => {
          if (authorImage || authorDescription) {
            const tooltip = document.createElement("div");
            tooltip.className = "author-tooltip";
            tooltip.innerHTML = `${
              authorImage
                ? `<img src="${authorImage}" alt="${authorName}" class="tooltip-author-image" />`
                : ""
            }${authorDescription ? `<p>${authorDescription}</p>` : ""}`;
            document.body.appendChild(tooltip);
            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${
              rect.top + window.scrollY - tooltip.offsetHeight - 10
            }px`;
            tooltip.style.left = `${rect.left + window.scrollX}px`;
          }
        }}
        onMouseLeave={() => {
          const tooltip = document.querySelector(".author-tooltip");
          if (tooltip) {
            tooltip.remove();
          }
        }}
      >
        {authorName}
      </span>
    </div>
  );
};

export default AuthorPopup;
