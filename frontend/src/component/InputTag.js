import React from 'react'
import "./InputTag.css"

const InputTag = () => {

    const [tags, setTags] = React.useState([
        'Tags',
        'Input'
    ]);

    var tagInput = ""

    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);

        // Call the defined function setTags which will replace tags with the new value.
        setTags(newTags);
    };

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };
    return (
        <div>
            <div className="input-tag">
                <ul className="input-tag__tags">
                    {tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                            <button type="button" onClick={() => { removeTag(i); }}>+</button>
                        </li>
                    ))}
                    <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c }} /></li>
                </ul>
            </div>
        </div>
    )
}

export default InputTag
