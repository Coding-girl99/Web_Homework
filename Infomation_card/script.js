// script.js
document.addEventListener("DOMContentLoaded", function () {
  const photo = document.getElementById("photo");
  const photoUpload = document.getElementById("photo-upload");
  const nameInput = document.getElementById("name");
  const infoInput = document.getElementById("info");
  const saveBtn = document.getElementById("save-btn");

  // 上传头像
  photoUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photo.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 保存信息
  saveBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const info = infoInput.value;

    // 更新显示内容
    nameInput.value = name;
    infoInput.value = info;

    alert("信息保存成功！");
  });
});