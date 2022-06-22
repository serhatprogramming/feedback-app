import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEditMode, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEditMode.editMode) {
      setText(feedbackEditMode.item.text);
      setBtnDisabled(false);
      setRating(feedbackEditMode.item.rating);
    }
  }, [feedbackEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEditMode.editMode) {
        updateFeedback(feedbackEditMode.item.id, newFeedback);
        feedbackEditMode.editMode = false;
        setBtnDisabled(true);
        feedbackEditMode.item = {};
        console.log(feedbackEditMode);
      } else {
        addFeedback(newFeedback);
        setBtnDisabled(true);
      }

      setText("");
    }
  };

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review."
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message"> {message} </div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
