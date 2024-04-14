import app from "./server";
import router from "./router";
const port = 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})