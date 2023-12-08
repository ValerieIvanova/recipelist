import {expect, test} from "vitest";
import formatDate from "./formattedDate";

test("formatDate", () => {
    const date = new Date("2022-01-01T00:00:00.000Z");
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("1 Jan 2022");
})