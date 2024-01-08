import React, { useState } from "react";
import axios from "axios";
import './main.css';
import LanguageSelect from "./Language";
import TextArea from "./TextArea";

const Main = () => {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [inputSelectType, setInputSelectType] = useState("en");
  const [outputType, setOutputType] = useState("en");

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleOutputSelectChange = (e) => {
    setOutputType(e.target.value);
  };

  const translateText = async () => {
    try {
      const response = await axios.post(
        "https://text-translator2.p.rapidapi.com/translate",
        `source_language=${inputSelectType}&target_language=${outputType}&text=${textInput}`,
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key":
              "382a6d837dmsh3673b78e742714bp186656jsndf23804edbc1",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
          },
        }
      );

      setTextOutput(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
    { label: "Russian", value: "ru" },
    { label: "Polish", value: "pl" },
    { label: "Portuguese", value: "pt" },
    { label: "Punjabi", value: "pa" },
    { label: "Romanian", value: "ro" },
    { label: "Russian", value: "ru" },
    { label: "Samoan", value: "sm" },
    { label: "Scots Gaelic", value: "gd" },
    { label: "Serbian", value: "sr" },
    { label: "Sesotho", value: "st" },
    { label: "Shona", value: "sn" },
    { label: "Sindhi ", value: "sd" },
    { label: "Sinhala ", value: "si" },
    { label: "Slovak", value: "sk" },
    { label: "Slovenian", value: "sl" },
    { label: "Somali", value: "so" },
    { label: "Spanish", value: "es" },
    { label: "Sundanese", value: "su" },
    { label: "Swahili", value: "sw" },
    { label: "Swedish", value: "sv" },
    { label: "Tajik", value: "tg" },
    { label: "Tamil", value: "ta" },
    { label: "Tatar", value: "tt" },
    { label: "Telugu ", value: "te" },
    { label: "Thai", value: "th" },
    { label: "Turkish", value: "tr" },
    { label: "Turkmen", value: "tk" },
    { label: "Ukrainian", value: "uk" },
    { label: "Urdu", value: "ur" },
    { label: "Uyghur", value: "ug" },
    { label: "Uzbek", value: "uz" },
    { label: "Vietnamese", value: "vi" },
    { label: "Welsh", value: "cy" },
  ];

  return (
    <div className="Main">
      <div className="InputText">
        <LanguageSelect
          value={inputSelectType}
          onChange={(e) => setInputSelectType(e.target.value)}
          options={languageOptions}
        />
        <TextArea value={textInput} onChange={handleInputChange} />
      </div>
      <button onClick={translateText}>Translate</button>

      <div className="outputText">
        <LanguageSelect
          value={outputType}
          onChange={handleOutputSelectChange}
          options={languageOptions}
        />
        <TextArea value={textOutput} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Main;
