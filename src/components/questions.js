import React, { useEffect, useState } from "react";
import { MathJax } from "better-react-mathjax";
import "../fonts/MathJax_Main-Regular.woff";
const Questions = (props) => {
  let query = props.query;
  const [question, setQuestion] = useState("");
  const [err,setErr]  = useState("");
  const fetchData = async () => {
    const response = await fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${query}`,
      {
        method: "GET",
      }
    );
    response.json().then((data) => setQuestion(`${data[0].Question}`)).catch((error) => {
        setErr(error);
    });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [query]);
  	useEffect(() => {
		if (typeof window?.MathJax !== 'undefined') {
			window.MathJax.typesetPromise();
		}})
  return (
    <>
      {err === "" ? (
          <MathJax>
            {question}
          </MathJax>
      ) : (
        <h3>Something Went Wrong</h3>
      )}
    </>
  );
};

export default Questions;
