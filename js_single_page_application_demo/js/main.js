

// get all the questions => GET http://localhost:3000/api/v1/questions

const Question = {
    index() {
        return fetch("http://localhost:3000/api/v1/questions")
            .then(res => res.json());
    }
}

Question.index().then(questions => {
    console.log(questions);
})