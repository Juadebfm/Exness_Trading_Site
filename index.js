const upAbtBtn = document.querySelectorAll(".abt_btn_up")[0];
const downAbtBtn = document.querySelectorAll(".abt_btn_down")[0];
const navAbtList = document.querySelectorAll(".sub_navList_abt")[0];

const upAcctBtn = document.querySelectorAll(".acct_btn_up")[0];
const downAcctBtn = document.querySelectorAll(".acct_btn_down")[0];
const navAcctList = document.querySelectorAll(".sub_navList_acct")[0];

const upPlatBtn = document.querySelectorAll(".plat_btn_up")[0];
const downPlatBtn = document.querySelectorAll(".plat_btn_down")[0];
const navPlatList = document.querySelectorAll(".sub_navList_plat")[0];

const upToolsBtn = document.querySelectorAll(".tools_btn_up")[0];
const downToolsBtn = document.querySelectorAll(".tools_btn_down")[0];
const navToolsList = document.querySelectorAll(".sub_navList_tools")[0];

// For About
downAbtBtn.addEventListener("click", () => {
  navAcctList.classList.remove("active");
  upAcctBtn.style.display = "none";
  downAcctBtn.style.display = "flex";
  navAbtList.classList.toggle("active");
  downAbtBtn.style.display = "none";
  upAbtBtn.style.display = "flex";
});

upAbtBtn.addEventListener("click", () => {
  navAbtList.classList.remove("active");
  upAbtBtn.style.display = "none";
  downAbtBtn.style.display = "flex";
});

// For Account
downAcctBtn.addEventListener("click", () => {
  navAbtList.classList.remove("active");
  upAbtBtn.style.display = "none";
  downAbtBtn.style.display = "flex";
  navPlatList.classList.remove("active");
  upPlatBtn.style.display = "none";
  downPlatBtn.style.display = "flex";
  navAcctList.classList.toggle("active");
  downAcctBtn.style.display = "none";
  upAcctBtn.style.display = "flex";
});

upAcctBtn.addEventListener("click", () => {
  navAcctList.classList.remove("active");
  upAcctBtn.style.display = "none";
  downAcctBtn.style.display = "flex";
});

// For Platform
downPlatBtn.addEventListener("click", () => {
  navAcctList.classList.remove("active");
  upAcctBtn.style.display = "none";
  downAcctBtn.style.display = "flex";
  navToolsList.classList.remove("active");
  upToolsBtn.style.display = "none";
  downToolsBtn.style.display = "flex";
  navPlatList.classList.toggle("active");
  downPlatBtn.style.display = "none";
  upPlatBtn.style.display = "flex";
});

upPlatBtn.addEventListener("click", () => {
  navPlatList.classList.remove("active");
  upPlatBtn.style.display = "none";
  downPlatBtn.style.display = "flex";
});

// For Tools
downToolsBtn.addEventListener("click", () => {
  navPlatList.classList.remove("active");
  upPlatBtn.style.display = "none";
  downPlatBtn.style.display = "flex";
  navToolsList.classList.toggle("active");
  downToolsBtn.style.display = "none";
  upToolsBtn.style.display = "flex";
});

upToolsBtn.addEventListener("click", () => {
  navToolsList.classList.remove("active");
  upToolsBtn.style.display = "none";
  downToolsBtn.style.display = "flex";
});
