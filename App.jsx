import { IconBrandGithub } from "@tabler/icons-react";
import Card from "./pages/card";
import Button from "./pages/button";
import PlaceContentCenter from "./pages/PlaceContentCenter";
import Input from "./pages/input";
import Label from "./pages/label";
import { useState } from "react";

function App() {
    const [form, setForm] = useState("");
    const inputHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    function submitHandler(event) {
        event.preventdefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign in from acount</Card.Title>
                <form onSubmit={submitHandler}>
                    <Card.Body>
                        <div className="border rounded ">
                            <div>name : {form.name}</div>
                            <div>email : {form.email}</div>
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="email" value="NAME" />
                            <Input
                                name={"name"}
                                value={form.name}
                                onChange={inputHandler}
                                id={"name"}
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="email" value="EMAIL" />
                            <Input
                                name={"email"}
                                id={"email"}
                                value={form.email}
                                onChange={inputHandler}
                                type="email"
                            />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button>
                            <IconBrandGithub />
                            REGISTER
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
