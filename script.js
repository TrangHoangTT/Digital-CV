"use strict";
// Chọn các phần tử
const form = document.querySelector("#my-form");
const emailInput = document.querySelector(".personal-info-email");
const infoContainer = document.querySelector(".info-container");
const btnSubmit = document.querySelector(".btn-submit");
const requiredEmail = document.querySelector(".required-email");
const hoverSectionContent = document.querySelectorAll(".section-content");

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định
  const email = emailInput.value.trim();
  if (!email || !isValidEmail(email)) {
    // show error message
    requiredEmail.textContent = "Vui lòng nhập đúng định dạng email";
    requiredEmail.classList.add("invalid-feedback");
    emailInput.classList.add("is-invalid");
  } else {
    // hide form, show info container
    form.classList.add("hidden");
    infoContainer.classList.remove("hidden");
  }
});
// Thêm event ở form
function isValidEmail(email) {
  // check if email is valid using regex
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
}

// ẩn chức năng thông tin nghề nghiệp
// Duyệt qua từng element trong section-content
hoverSectionContent.forEach((showBtn) => {
  // lấy nút "view more" trong section
  const viewMoreBtn = showBtn.querySelector(".view-more");
  // Bắt sự kiện hover vào phần tử
  showBtn.addEventListener("mouseover", () => {
    // Hiện thị nút View more
    viewMoreBtn.style.display = "block";
  });
  // Bắt sự kiện out khỏi phần tử
  showBtn.addEventListener("mouseout", () => {
    // ẩn nút view more
    viewMoreBtn.style.display = "none";
  });
  // Bắt đầu sự kiện click vào button
  viewMoreBtn.addEventListener("click", () => {
    // Lấy element cần show
    const showDetailcontents = showBtn.querySelectorAll(".content");
    let isExpanded = false;
    // Duyệt qua từng phần tử content trong element
    showDetailcontents.forEach((content) => {
      // Tự động thêm hoặc xoá class hidden cho content
      content.classList.toggle("hidden");
      if (content.classList.contains("hidden")) {
        isExpanded = false;
      } else {
        isExpanded = true;
      }
    });
    // Đổi text hiển thị của button mỗi khi click
    if (isExpanded) {
      viewMoreBtn.textContent = "VIEW LESS";
    } else {
      viewMoreBtn.textContent = "VIEW MORE";
    }
  });
});

// redirect to new page
const myDiv = document.querySelectorAll(".redirect-new-page");
myDiv.forEach((allPrj) => {
  allPrj.addEventListener("click", () => {
    window.open("project-charter.html", "_blank");
  });
  allPrj.style.cursor = "pointer";
});
