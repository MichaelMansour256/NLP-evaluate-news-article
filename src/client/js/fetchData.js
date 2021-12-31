async function fetchData (url = {}) {
    const res = await fetch(`http://localhost:8081/sentiment/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(url)
    });
    const data = await res.json();
    document.getElementById('model').innerText = "model: "+data.model;
    document.getElementById('agreement').innerText = "agreement: "+data.agreement;
    document.getElementById('subjectivity').innerText = "subjectivity: "+data.subjectivity;
    document.getElementById('confidence').innerText = "confidence: "+data.confidence;
    document.getElementById('irony').innerText = "irony: "+data.irony;
    document.getElementById('score_tag').innerText = "score_tag: "+data.score_tag;
    

}

export { fetchData };