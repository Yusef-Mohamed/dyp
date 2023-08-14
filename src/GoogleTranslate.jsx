import React, { useEffect } from "react";

function GoogleTranslate() {
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
          includedLanguages: "ar,en",
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
