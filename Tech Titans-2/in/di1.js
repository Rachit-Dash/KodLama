async function getExercise() {
    const url = "https://diabetes4.p.rapidapi.com/api/Excercises/80?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MzkxNDAzMTksImV4cCI6MTczOTE0MzkxOSwibmJmIjoxNzM5MTQwMzE5LCJqdGkiOiJUZERQUVJsRjRXMTBacmdIIiwic3ViIjoiMjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.wr3tHeZZ8qXsHFVC106FPak9ogfJymiMda3Z3LEremc";

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "56d9f11f6emshe0b14edd51da73bp1cd378jsn11765bfbad63",
            "x-rapidapi-host": "diabetes4.p.rapidapi.com"
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(HTTP error! Status: ${response.status});
        
        const data = await response.json();
        document.getElementById("result").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching exercise data:", error);
        document.getElementById("result").innerText = "Failed to fetch data.";
    }
}