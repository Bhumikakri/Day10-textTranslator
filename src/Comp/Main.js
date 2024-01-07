import React, { useState } from "react";
import axios from "axios";
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
            "X-RapidAPI-Key": "382a6d837dmsh3673b78e742714bp186656jsndf23804edbc1",
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
    
  ];

  return (
    <div>
      <div>
        <LanguageSelect
          value={inputSelectType}
          onChange={(e)=>setInputSelectType(e.target.value)}
          options={languageOptions}
        />
        <TextArea value={textInput} onChange={handleInputChange} />
      </div>
      <button onClick={translateText}>Translate</button>

      <div>
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
