const ShareEl = document.getElementById("share")
const SharedEl = document.querySelectorAll(".shared")
const ProfileEl = document.getElementById("profile__section")
const SocialEl = document.getElementById("social__media-icons")

 SocialEl.style.display = "none"
 ProfileEl.style.display ="flex"

 SharedEl.forEach(function (ShareEl) {
    ShareEl.addEventListener("click", function () {
      if (window.innerWidth > 412) {
        // For screen widths above 412px
        if (SocialEl.style.display === "flex") {
          SocialEl.style.display = "none"; // Hide social media icons
        } else {
          SocialEl.style.display = "flex"; // Show social media icons
          //SocialEl.style.top = `${ProfileEl.offsetTop + ProfileEl.offsetHeight + -60}px`; // Position social icons just below the profile section
        }
      } else {
        // For smaller screens (<= 412px), toggle visibility as you currently have
        if (SocialEl.style.display === "flex") {
          SocialEl.style.display = "none";
          ProfileEl.style.display = "flex";
        } else {
          SocialEl.style.display = "flex";
          ProfileEl.style.display = "none";
        }
      }
    });
  });


