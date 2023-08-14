import React, { useEffect } from "react";

function GoogleTranslate() {
  window.addEventListener("click", (e) => {
    if (e.target.value === "ar") {
      window.location.reload();
    }
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ar",
          includedLanguages: "en,ar",
        },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;
