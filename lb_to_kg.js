const regex = new RegExp("([0-9]*.?[0-9]+)[ ]*lbs?", "gi");

function lb_to_kg(text) {
    if (text.nodeType === Node.TEXT_NODE) {
        let text_copy = text.textContent;
        const array = [...text_copy.matchAll(regex)];
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++){
                lb = array[i][1];
                kg = Math.floor(100 * lb/2.2) / 100;
                match = array[i][0];
                text_copy = text_copy.replace(match, `${match} (${kg} kg)`);
            }
        }
        text.textContent = text_copy;
    } else {
        for (let i = 0; i < text.childNodes.length; i++){
            lb_to_kg(text.childNodes[i]);
        }
    }
}

lb_to_kg(document.body);

