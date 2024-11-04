const documentBodyMainContentIframe = document.getElementById("body-main-content-panel");
const navLinkElementRefs = {
    aboutMePage: document.querySelector(".body-nav-directory > .body-nav-directory-list > #body-nav-about-page"),
    contactMePage: document.querySelector(".body-nav-directory > .body-nav-directory-list > #body-nav-contact-page"),
};

const navLinkTargets = {
    aboutMePage: "./pages/about_me/about_me.html",
    contactMePage: "./pages/contact_me/contact_me.html",
};

for (const [pageName, linkElement] of Object.entries(navLinkElementRefs)) {
    const pageLinkUrl = navLinkTargets[pageName];
    linkElement.addEventListener("click", () => {documentBodyMainContentIframe.src = pageLinkUrl});
}
