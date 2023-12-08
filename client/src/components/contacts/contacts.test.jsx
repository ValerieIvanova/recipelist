import Contacts from "./Contacts";
import { beforeAll, render, test, screen } from "vitest";

test("renders Contacts component", () => {
    beforeAll(() => {
        render(<Contacts />);
    });
});
