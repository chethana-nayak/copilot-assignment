import "./AuthorPopup.css";

const AuthorPopup = ({ image, description, name }) => {
  const hasTooltip = image || description;

  return (
    <div className="author-info">
      <span
        style={{ cursor: hasTooltip ? "pointer" : "default" }}
        className="author-name"
        onMouseEnter={(e) => {
          if (image || description) {
            const tooltip = document.createElement("div");
            tooltip.className = "author-tooltip";
            tooltip.innerHTML = `${
              image
                ? `<img src="${image}" alt="${name}" class="tooltip-author-image" />`
                : ""
            }${description ? `<p>${description}</p>` : ""}`;
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
        {name}
      </span>
    </div>
  );
};

export default AuthorPopup;
