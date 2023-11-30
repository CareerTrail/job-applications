import { ChangeEvent, ReactElement, useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

interface EditableTextProps {
  initialText: string;
  handleUpdate: (text: string) => void;
}

/**
 * EditableText component for displaying and editing text.
 *
 * @component EditableText
 *
 * @param {string} initialText - The initial text to display.
 * @param {function} handleUpdate - Callback function triggered on text update.
 *
 * @returns {ReactElement} The rendered EditableText component.
 */
const EditableText = ({
  initialText,
  handleUpdate,
}: EditableTextProps): ReactElement => {

  /**
   * Handles the double click event to enable text editing.
   * @function
   * @private
   */
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  /**
   * Handles the change event for the text input.
   * @function
   * @private
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  /**
   * Handles the blur event when the text input loses focus.
   * @function
   * @private
   */
  const handleBlur = () => {
    setIsEditing(false);
    handleUpdate(text);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  // TODO: apply styles
  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <TextField
          id="textInput"
          name="textInput"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={text}
          autoFocus
        />
      ) : (
        <Typography gutterBottom>{text || "-"}</Typography>
      )}
    </div>
  );
};

export default EditableText;
