const starsContainer = document.querySelector('.stars');
const rate = 5; // replace with your rate

for (let i = 0; i < rate; i++) {
  const star = document.createElement('span');
  star.innerHTML = '&#9733;';
  starsContainer.appendChild(star);
}

document.addEventListener("DOMContentLoaded", function() {
  const commentForm = document.getElementById("comment-form");
  const commentsSection = document.getElementById("z");

  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const commentText = document.getElementById("comment").value;
    const rateInput = parseInt(document.getElementById("rate").value);

    if (commentText.trim() !== "" && !isNaN(rateInput) && rateInput >= 1 && rateInput <= 5) {
      const commentItem = document.createElement("p");
      commentItem.textContent = commentText + " (Rated: " + rateInput + " stars)";
      commentsSection.appendChild(commentItem);
      commentForm.reset();
    }
  });
});
