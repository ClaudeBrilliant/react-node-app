const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();

// endpoint req
app.get("/api", (req,res) => {
    res.json({ message: "Helo from server!"});
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});